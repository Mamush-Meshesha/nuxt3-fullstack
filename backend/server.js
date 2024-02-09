const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const gql = require("graphql-tag");
const { GraphQLClient } = require("graphql-request");
const app = express();

const PORT = 3300;
app.use(express.json());
app.use(cors());
// graphqql client
const client = new GraphQLClient("http://localhost:8180/v1/graphql", {
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": "myadminsecretkey",
  },
});

//login query

const LOGIN_MUTATION = gql`
  query loginUser($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
      email
      username
      first_name
      last_name
      password
    }
  }
`;

//register graphql

const MUTATION_REGISTER = gql`
  mutation RegisterUser(
    $first_name: String!
    $last_name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    insert_users_one(
      object: {
        first_name: $first_name
        last_name: $last_name
        username: $username
        email: $email
        password: $password
      }
    ) {
      id
      first_name
      last_name
      email
      password
      username
    }
  }
`;

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body.input;

    const variables = {
      email: email,
    };

    const user = await client.request(LOGIN_MUTATION, variables);
    console.log(user);
    if (!user.users[0]) {
      return res.status(401).json({ message: "user not Authorized" });
    }

    const matchPassword = await bcrypt.compare(
      password,
      user.users[0].password
    );
    if (!matchPassword) {
      return res.status(401).json({ message: "incorrect password" });
    }

    const payload = {
      iat: Math.floor(Date.now() / 1000) - 30,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 10,
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["user"],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": "" + user.users[0].id,
      },
    };

    const accessToken = jwt.sign(
      payload,
      "0B5G1MO4DK21UihMu8NM5g30Ml5NARjGmiDxve15aHovMqr1XWEHALxlMLQbt3CVENpPBzxVthSc3hqu82Xf"
    );

    res.status(200).json({ accessToken: accessToken });
    console.log(accessToken);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { email, first_name, last_name, username, password } = req.body.input;
    const hashedPassword = await bcrypt.hash(password, 10);

    const variables = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: hashedPassword,
    };

    const insert_users_one = await client.request(MUTATION_REGISTER, variables);

    if (!insert_users_one) {
      return res
        .status(403)
        .json({ message: "email or username already exist" });
    }
    res.status(200).json({ success: "register successfully" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
