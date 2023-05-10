## Coca-Cola Journey 3D Web App

This website was created as part of the submission for the assessment of the 3D Web Application module at the University of Sussex.

**Architecture:**

SQLite -> PHP -> JSON -> Javascript pipeline 
* On the server side, data for page content (cards, 3d model pages, carousel) is stored in a SQLite database. This SQLite database is accessed via PHP, the contents of each table are marshalled into JSON.
* Client side, JavaScript is used to populate the HTML elements with data expressed in the JSON responses. 

Image Gallery
* PHP is used to parse subdirectories of assets based on a GET request (e.g, gallery_json.php?gallery=coke).
* The directory listing is marshalled into a JSON array, with non image files ignored.
* On the client side the lightbox image gallery is populated with the contents of this JSON array.

About Page
* The about page uses the Showdown JavaScript libraryto parse a Markdown file stored in assets/markdown.
* HTML code is generated from the markdown and inserted into the about page, allowing easy editing of the text-heavy page.



**Instructions:** Each product page has 2 models, toggle the can/bottle/cup tabs to interact with each one. Occasionally, the models stop working and freeze on the page. This appears to be an issue with the X3DOM library. If this happens, just reload the page.

  

## Links


[Coca-Cola Journey](https://users.sussex.ac.uk/~jd623/3dapp/assignment/app/index.html)

[GitHub Repo](https://github.com/josephinedehaan/3d_app/tree/master/3dapp/assignment/app)

[3D Models](https://github.com/josephinedehaan/3d_app/tree/master/3dapp/assignment/3d_models)

  
  
## Points of deeper understanding

1. Six models were created and exported using Maxon Cinema 4D.

2. Two renders per model (12 renders total) were generated using the Cinema 4D Standard render engine. Three compositions were created in Adobe Photoshop using the renders.

3. Showdown JS Library used to create About page contents.

4. Regular use of GitHub version control.


## References

modelInteractions.js is heavily based on Martin White's modelInteraction.js.

Brand logos from [World Vector Logo](https://worldvectorlogo.com).

Carousel images from [Coca-Cola UK](https://www.coca-cola.co.uk).

[Cinema 4D Tutorial Create a Soda Can](https://www.youtube.com/watch?v=03XvlHV4wG4)

[Create Your Own Procedural Soda Bottle in Cinema 4D - Advanced Tutorial](https://www.youtube.com/watch?v=mSuJ_66Yddw)

[Easy sticky footer - stop a footer from floating up a short page!](https://www.youtube.com/watch?v=yc2olxLgKLk)

[Bootstrap](https://getbootstrap.com)

[W3Schools](https://www.w3schools.com)
