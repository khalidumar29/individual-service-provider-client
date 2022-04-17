import React from "react";

const Blogs = () => {
  return (
    <div className='container'>
      <article className='py-3 text-left'>
        <h2 style={{ textAlign: "left" }}>
          Difference between authorization and authentication
        </h2>
        <p style={{ textAlign: "left" }}>
          Both Authentication and Authorization area unit utilized in respect of
          knowledge security that permits the safety on an automatic data
          system. Each area unit terribly crucial topics usually related to the
          online as key items of its service infrastructure. However, each the
          terms area unit terribly completely different with altogether
          different ideas. whereas it's true that they're usually employed in an
          equivalent context with an equivalent tool, they're utterly distinct
          from one another. In authentication process, the identity of users are
          checked for providing the access to the system. While in authorization
          process, person's or user's authorities are checked for accessing the
          resources. Authentication is done before the authorization process,
          whereas authorization process is done after the authentication process
        </p>
      </article>
      <article className='py-3 text-left'>
        <h2 style={{ textAlign: "left" }}>
          Why are you using firebase? What other options do you have to
          implement authentication?{" "}
        </h2>
        <p style={{ textAlign: "left" }}>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. Firebase Authentication integrates tightly with other Firebase
          services, and it leverages industry standards like OAuth 2.0 and
          OpenID Connect, so it can be easily integrated with your custom
          backend.
        </p>
      </article>
      <article className='py-3 text-left'>
        <h2 style={{ textAlign: "left" }}>
          What other services does firebase provide other than authentication{" "}
        </h2>
        <p style={{ textAlign: "left" }}>
          <ol>
            <li>Parse Open Source Backend Platform;</li>
            <li>Back4app – Parse Hosting Platform;</li>
            <li>
              Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
            </li>
            <li>Backendless – Mobile Backend and API Services Platform;</li>
            <li>
              Kuzzle – Backend for web, hybrid, or native mobile apps and IoT
              projects;
            </li>
            <li>Game Sparks – Game Backend Platform</li>
            <li> Accelerates development and provides full control;</li>
            <li>Amplify JS – Open-source Javascript framework;</li>
            <li>Heroku – Platform as a service backed by Salesforce</li>
            <li>Kumulos – App Performance Management;</li>
          </ol>
        </p>
      </article>
    </div>
  );
};

export default Blogs;
