function Menu(options) {
    options = Object.create(options);
    options.width = options.width || 300;

    alert( options.width ); // возьмёт width из наследника
    alert( options.height );
}