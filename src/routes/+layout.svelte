<script>
	import '../app.css';
    import Layout from "$lib/components/Layout.svelte";
	let { children } = $props();
</script>

{@render children()}


