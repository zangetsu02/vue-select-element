
const vOnClickOutside = {
    mounted(el, binding) {
        el.clickOutsideEvent = (e) => {
            if (!(el === e.target || el.contains(e.target))) {
                binding.value();
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    },
};


export default vOnClickOutside