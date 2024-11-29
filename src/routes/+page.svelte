<script>
    import ollama from 'ollama'
    import Layout from "$lib/components/Layout.svelte";
    import Ask from "$lib/components/Ask.svelte";
    import anonymizationQuery from './anonymization.txt?raw';

    let chat = [];
    let query = "";

    async function ask() {
        console.log(query);

        chat = [...chat, { type: "ASK", text: query }];

        const response = await ollama.chat({
            model: 'qwen2:7b',
            messages: [{role: 'user', content: anonymizationQuery+query}],
        });

        query = "";
        chat = [...chat, { type: "ANSWER", text: response.message.content }];
    }


</script>
<Layout>
    <div class="w-full max-w-2xl mx-auto">
        <div class="flow-root">
            <ul role="list" class="-mb-8">
                {#each chat as chatRow}
                    {#if chatRow.type==='ASK'}
                        <Ask text={chatRow.text} >User</Ask>
                    {:else }
                        <Ask text={chatRow.text} >Mountbirch AI</Ask>
                    {/if}
                {/each}
            </ul>
        </div>
    </div>

    <!-- Query -->
    <div slot="chat" class="w-full max-w-2xl bg-gray-100 mx-auto my-6 rounded-lg border border-white overflow-hidden">
        <textarea bind:value={query} rows="3" name="comment" id="comment" class="block w-full resize-none bg-transparent border-0 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-0 outline-0 outline-gray-100 border-0 focus:border-0s sm:text-sm/6" placeholder="Message anonymized ChatGPT"></textarea>

        <div class="w-full">
            <button on:click={ask} type="button" class="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 inline-block float-end mb-2 mr-2">Ask</button>
        </div>
    </div>
</Layout>

