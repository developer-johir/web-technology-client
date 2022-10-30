import React from "react";

const Blog = () => {
  return (
    <div className="py-5 m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 className="text-center">Question and answer</h1>
      <div className="mt-4">
        <h4 className="text-xl">
          <span className="text-primary">Question-1:</span> what is cors?
        </h4>
        <p>
          <span className="text-warning">Answer:- </span>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that
          allows a server to indicate any origins (domain, scheme, or port) other than its
          own from which a browser should permit loading resources.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span className="text-primary">Question-2:</span> Why are you using firebase?
        </h4>
        <p>
          <span className="text-warning">Answer:- </span>
          Google Analytics for Firebase allows you to track your users' journey through real-time and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span className="text-primary">Question-3:</span> How does the private route work?
        </h4>
        <p>
          <span className="text-warning">Answer:- </span>
          The private route component is similar to the public route, the only change is the redirect URL and authenticates condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span className="text-primary">Question-4:</span> What is Node? How does Node work?
        </h4>
        <p>
          <span className="text-warning">Answer:- </span>
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
