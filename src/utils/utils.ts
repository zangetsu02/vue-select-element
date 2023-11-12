
const vOnClickOutside = {
    mounted(el: any, binding: any) {
        el.clickOutsideEvent = (e: any) => {
            if (!(el === e.target || el.contains(e.target))) {
                binding.value();
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el: any) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    },
};


export default vOnClickOutside