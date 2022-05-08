const preventDefault = e => e.preventDefault();

export default {
    mounted() {
        const { dropListener } = this
        document.addEventListener('drop', dropListener, false)
        document.addEventListener('dragover', preventDefault, false)
    },
    beforeDestroy() {
        const { dropListener } = this
        document.removeEventListener('drop', dropListener)
        document.removeEventListener('dragover', preventDefault)
    },
}