<script lang="ts">
	import { api } from '$lib/api';
	import { onMount } from 'svelte';
	let Msg:string;
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

	let count: number = 0;
	function tambah() {
		count += 1;
	}

	onMount(async () => {
		try {
			const res =await api.post('/chatbot/chat', {
				input: 'perkenalkan siapa anda'
			});
            console.log(res.data);
            
			Msg = res.data;
		} catch (error) {
            console.log(error.message);
            
			Msg = JSON.stringify(error.message);
		}
	});
</script>

<h2>ini page test</h2>
<pre>{JSON.stringify(userBaru)}</pre>

<pre>{JSON.stringify(Msg)}</pre>

<div class="flex gap-3">
	<button class="bg-zinc-900 text-white" on:click={tambah}> tambah :</button>
	<span>
		{count}
	</span>
</div>

<a href="/">back</a>
