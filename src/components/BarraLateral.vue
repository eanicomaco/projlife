<script setup lang="ts">

</script>

<template>
    <header>
        <h1>
            <img src="../assets/logo.webp" alt="logotipo">
        </h1>
        <nav class="mt-5">
            <ul>
                <li class="link" style="font-weight: bolder;">MENU PRINCIPAL</li>
                <li><hr></li>
                <li>
                    <RouterLink to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/projetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}
li{
    margin: 10px 0 0 10px;
}
.link{
    color: #fff;
    font-size: 2rem;
}
.link:hover{
    color: #faf0ca;
}
.link.router-link-active{
    color: #faf0ca;
}
i{
    margin-right: 6px
}
hr{
    border: none;
    border-top: 1px solid #fff;
}
@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>