var cls = (function(){

    function hasClass( el, cl_name) {
        if (el.classList) {
            return el.classList.contains(cl_name);
        }   
        else {
            return new RegExp('(^| )' + cl_name + '( |$)', 'gi').test(el.className);
        }
    };
    
    function addClass( el, cl_name ) {
        if (el.classList) {
            el.classList.add(cl_name)
        } else {
            el.className = el.className + ' ' + cl_name; 
        }
    };
    
    function removeClass(el, cl_name) {
        if (el.classList) {
            el.classList.remove(cl_name);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + cl_name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };
    
    function toggleClass(el, cl_name) {
        (hasClass( el, cl_name ) ? removeClass : addClass)(el, cl_name );
    };
    
    function switchClass( el, old_cl_name, new_cl_name ) {
        removeClass( el, old_cl_name );
        addClass( el, new_cl_name );
    };
    
    var cls =  {
        add: addClass,
        has: hasClass,
        remove: removeClass,
        toggle: toggleClass,
        switch: switchClass
    };
     
    if ( typeof define === 'function' && define.amd ) {
        define( classie );
    } else if ( typeof exports === 'object' ) {
        module.exports = classie;
    } else {
        return cls;
    };
})();