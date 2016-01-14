URL shortener microservice for the FCC challenge - http://www.freecodecamp.com/challenges/basejump-url-shortener-microservice


######################################################

<header>
<title>
URL Shortener Microservice
</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</header>
<main>
URL Shortener Microservice - FCC Basejump
=========================================

Pass a URL as a parameter to receive a JSON string containing a shortened URL that will redirect to the original site, example usage below:

<span style="color:red">To create a new short URL, input the URL after ~/new/</span>
<span style="color:green">Example: </span>(hostname)/new/http://google.com
<span style="color:red">To redirect to the shortened URL, use the short\_url provided by the API</span>
<span style="color:green">Example: </span>(hosname)/IractpTp

-   Validates URI before querying and saving to the database.
-   Will not create duplicate short urls for the same URL.
-   Creates a new short URL for each original URL.
-   Redirects to original URL from the input short URL.

</main>