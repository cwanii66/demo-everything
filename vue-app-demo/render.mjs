import { h, ref } from 'vue';

const vnode = h(
    'div', 
    { 
        id: 'foo', 
        class: 'bar' 
    }, 
    []
);
console.log(vnode.type, vnode.props, vnode.children, vnode.key);

export default {
    props: {

    },
    setup(props) {
        const count = ref(1);

        return () => h('div', props.msg + count.value);
    }
}