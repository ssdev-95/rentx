<script setup lang="ts"></script>

<template>
  <header
    class="w-screen h-16 mb:h-14 flex items-center justify-center bg-white"
  >
	  <div class="flex items-center justify-center h-full p-4 mb:p-3 bg-red-500">
		  <img
			  src="../assets/union_icon.svg"
				class="w-8"
				alt=""
			/>
		</div>

	  <nav class="flex-1 px-3 py-4 flex items-center justify-between">
      <slot></slot>
		</nav>
  </header>
</template>
