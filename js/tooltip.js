// const lis = document.querySelectorAll("tooltip-prueba");

// for (let i=0; i<lis.length; i++) {
//   tippy(lis[i], {
//     placement: 'right',
//     interactive: true,
//     arrow: true,
//     animation: 'scale',
//     // appendTo: lis[i].parentNode,
//     // popperOptions: {
//     //   modifiers: {
//     //     preventOverflow: { enabled: false },
//     //     hide: { enabled: false }
//     //   }
//     // }
//   })
// }
// import 'tippy.js/themes/light.css';
// import tippy from 'tippy.js';
// import 'tippy.js/dist/tippy.css';

tippy(".tooltip-prueba",{
    placement: 'right',
    arrow: true,
    animation:"perspective",
    theme:'light',
    popperOptions: {
        modifiers: {
        preventOverflow: { enabled: false },
        hide: { enabled: false }
        }
    }
})