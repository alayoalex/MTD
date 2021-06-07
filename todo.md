## Browser incompatibility

[x] When people are using your website, they’re likely using it through one of many browser
extensions. Chrome, Firefox, Internet Explorer, Opera, and Safari are just a few of the most
popular browsers. As such, websites need to be compatible with all of the major types of
browsers in order to ensure good user experience across the board. Without instituting
compatibility testing, however, you may not be able to catch bugs that only appear in certain
browsers.

- Una de las imágenes en la vista que lista las habitaciones (cuando vas a la vista _Our Rooms_, que lista todas las habitaciones disponible, la que se llama _Single Economy_, no carga su imagen en esa vista en miniatura, ni tampoco la imagen principal en la vista detalle de ella cuando pinchas en _Features_) no carga en el Firefox.
- Un icono en la lista de los servicios solo carga en el Firefox, específicamente el icono del servicio _Free Cocktails_.
- Algunas cosas no abren en el navegador Safari: El icono para _Free Shuttle_ no se encuentra (Not Found Error), y la barra azul para filtrar por el precio de las habitaciones no sale y muestra un mensaje de que no es soportada en ese navegador.
- Los componentes que permiten filtrar las habitaciones disponibles no se ven igual en diferentes navegadores. Basicamente no es un error, sino cuestion de visualizaciones principalmente de la forma en que cada navegador lo renderiza y visualiza.

## Validation fields

[x] If you enter invalid characters into your validation fields, or exceed the maximum length, then
errors and bugs can easily crop up. These bugs are extremely common and typically not that
severe, but there are a few that can truly make or break your software.

- 3 errors related to this one.

* En el formulario _Contact Data_, el campo del nombre no tiene limite maximo de caracteres, además permite
  caracteres numericos y caracteres no alfanumericos.
* En el Campo de Calle “Street” en el formulario “book” permitir que solo se puedan entrar 10 caracteres.
* En el formulario de contacto NO validado el campo de email y que se puede entrar cualquier formato para correo.

## Date control

[-] If your site or app requires age restrictions (such as with dating apps or websites for alcoholic
beverages), there are often bugs related to date control. These are most commonly found in
the registration forms where people are inputting their birth date. Why? Because developers
often only test for the exact cut-off date, when in reality you have to test for the dates
immediately preceding and following the cut-off date.

- 2 error related to this one.

* En el campo “Select the Booking Days” se puede seleccionar una “Start Date” mayor que “End Date”.
* En el campo _Edad_ se puede insertar cualquier edad.

## Crashes caused by button clicks

Chances are you’ve experienced a time where you’ve clicked on just one button and suddenly
the entire app crashes. These hidden time-bombs are extremely common but difficult to weed
out by developers. With software testing, though, you’ll be able to spot and correct these bugs
far more easily than you would

- 2 error related to this one.

* Botón de enviar mensaje de contacto no funciona, pues se queda cargando y nunca notifica al usuario de que senvió el mensaje o de algún error.
* El botón de enviar solicitud de reservación conduce a un error grave, la aplicación se rompe.

# Communication errors

If your software is not “user-friendly,” that’s a problem. Anything that your user needs to know
in order to use your app should be accessible on the screen. Keep in mind the importance of
having a useful menu on the homepage as well as a “help” section and make sure it is clear to
your user why he or she should use your app.

- 2 errors related to this one.

* No aparece información acerca de las cookies y la privacidad al entrar un usuario por primera vez en la página.
* Los textos _Lorem ipsum ...._ indican que la página aún no ha sido terminada ni revisada minuciosamente. Por ejemplo, la descripcion de los cinco primeros Alojamientos tienen este texto.

## Non-compliance with the description of the functional requirement.

- 1 error related to this one.

* Aquí no he puest ninguno. Me puedes dar una idea

## Inconsistencies in the Page Layout across Devices.

- 1 error related to this one.

* La barra de navegación se abre pero no se puede cerrar.
* En la barra de navegación, al abrir la pagina desde un teléfono movil no se observa la opción _Contact_

## Error Orthographic

- 3 errors related to this one.

* Endles Hiking en vez de Endless Hiking en Services en el Home
* Strongest Ber en vez de Strongest Beer en Services en el Home
* Famili Deluxe en vez de Family Deluxe en el Home
