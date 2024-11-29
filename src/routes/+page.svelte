<script>
    import ollama from 'ollama'
    import Layout from "$lib/components/Layout.svelte";

    let chat = [];
    let query = "";

    async function ask() {
        console.log(query);

        const response = await ollama.chat({
            model: 'llama3.2',
            messages: [{role: 'user', content: query}],
        })

        console.log(response.message.content)
    }


</script>
<Layout>
    <div class="w-full max-w-2xl mx-auto">
        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
    </div>

    <!-- Query -->
    <div slot="chat" class="w-full max-w-2xl bg-gray-100 mx-auto my-6 rounded-lg border border-white overflow-hidden">
        <textarea bind:value={query} rows="3" name="comment" id="comment" class="block w-full resize-none bg-transparent border-0 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-0 outline-0 outline-gray-100 border-0 focus:border-0s sm:text-sm/6" placeholder="Message anonymized ChatGPT"></textarea>

        <div class="w-full">
            <button on:click={ask} type="button" class="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 inline-block float-end mb-2 mr-2">Ask</button>
        </div>
    </div>
</Layout>

