<script>
    import { onMount } from 'svelte';
    import { marked } from 'marked';
    export let text;

    let htmlContent = '';

    onMount(async () => {
        htmlContent = await marked(text);
    })
</script>

<li class="relative flex gap-x-4">
    <!--div class="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
        <div class="w-px bg-gray-200"></div>
    </div>-->
    <div class="relative flex size-6 flex-none items-center justify-center bg-white">
        <div class="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
    </div>
    <div class="flex-auto py-0.5 text-xs/5 text-gray-500">
        <span class="font-medium text-gray-900"><slot></slot></span>

        <div class="w-full pt-2">
            {@html htmlContent}
        </div>
    </div>
</li>