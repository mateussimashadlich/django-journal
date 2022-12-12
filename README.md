# django-newspaper

A django project for newspaper publications.

<h1>How to run the project</h1>
<p>In order to run the project you will need:<p>
<ol>
    <li>Docker</li>
    <li>Make</li> 
</ol>
<p>With the two items above installed, execute the command <code>make</code> in project folder. This way frontend and backend containers will be built and run.</p>
<h2>Credentials</h2>
<p>Username: master</p>
<p>Password: M@ster!000</p>
<p>The credentials are used to access both frontend and API. API uses token authentication, in order to obtain the token, make a POST request to <code>http://localhost:8000/api-token-auth/</code>. When making a request to publications endpoint, pass the token in the request header.

Example: <code>Authorization: Token your_token </code>

<h2>API Documentation</h2>
<p>The newspaper API documentation can be found on <a href="http://localhost:8000/v1/swagger/">http://localhost:8000/v1/swagger/</a></p>
<h2>Frontend</h2>
<p>The publications managed on the API will be shown in frontend, which will be available at: <a href="http://localhost:3000">http://localhost:3000</a>
