<script lang="ts">
	import { api } from '$lib/api';
	let Msg: string = '';
	let input: string = '';
	let loading = false;
	let count: number = 0;

	type User = {
		username: string;
		password: string;
		umur: number;
	};

	let userBaru: User = {
		username: 'rizkiarkant55',
		password: 'ekikaja55',
		umur: 9
	};

	function tambah() {
		count += 1;
	}

	async function handleSubmit() {
		if (!input) {
			alert('Field tidak boleh kosong');
			return;
		}

		loading = true;
		try {
			const res = await api.post('/chatbot/chat', { input });
			Msg = res.data.result;
		} catch (error) {
			console.error(error);
			Msg = 'Gagal menghubungi bot.';
		} finally {
			loading = false;
		}
	}
</script>

<h2 class="text-2xl font-bold mb-4">Halaman Test ChatBot</h2>

<pre class="bg-gray-100 p-3 rounded mb-4">User Info: {JSON.stringify(userBaru, null, 2)}</pre>

<pre class="bg-gray-200 p-3 rounded mb-4">Bot Response: {Msg}</pre>

<form on:submit|preventDefault={handleSubmit} class="space-y-4 mb-6">
	<label class="block">
		<span class="block text-sm font-medium text-gray-700">Masukin chatmu ke bot:</span>
		<input
			type="text"
			bind:value={input}
			class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-indigo-200"
			placeholder="Tulis sesuatu..."
		/>
	</label>

	<button
		type="submit"
		disabled={loading}
		class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded disabled:opacity-50"
	>
		{#if loading}
			Loading...
		{:else}
			Kirim ke Bot
		{/if}
	</button>
</form>

<div class="flex items-center gap-3 mb-6">
	<button class="bg-zinc-900 text-white px-3 py-1 rounded" on:click={tambah}>Tambah</button>
	<span class="text-lg">{count}</span>
</div>

<a href="/" class="text-blue-500 underline">← Kembali ke halaman utama</a>
