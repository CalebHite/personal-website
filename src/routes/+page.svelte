<script lang="ts">
  import Doc from "$lib/Doc.svelte";
  import { collectionStore, docStore, userStore } from "$lib/stores";
  import User from "$lib/User.svelte";
  import { db as firestore } from "./firebase";
  import {
    addDoc,
    collection,
    Firestore,
    orderBy,
    query,
    refEqual,
    where,
  } from "firebase/firestore";
  import Collection from "$lib/Collection.svelte";
  import FirebaseApp from "$lib/FirebaseApp.svelte";
</script>

<!-- Navbar with social links and theme changer -->

<!-- Hook Page -->
<h1>Caleb Hite</h1>
<h3>web developer</h3>
<h2>What I'm Working On:</h2>

<!-- Bio Page -->
<h1>About Me</h1>
<p>##bio##</p>

<!-- Gallery Page -->
<p>##Images of me doing stuff##</p>

<!-- Statement Page -->
<h1>##Large, central statement about me##</h1>

<!-- Contact Page -->
<h1>Contact Me</h1>
<!-- Contact Links -->

<style>
</style>
