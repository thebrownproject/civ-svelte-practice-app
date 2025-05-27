<script context="module" lang="ts">
    let email = '';
    let password = '';
    let errorMessage = '';

    function handleSubmit() {
        if (email === 'test@example.com' && password === 'password123') {
            window.location.href = '/'; // Replace with your actual next page route
        } else {
            errorMessage = 'Invalid email or password';
        }
    }
</script>

<main>
    <div class="header-container">
        <img src="/path/to/your/image.png" alt="Logo" class="header-logo" />
        <h1>Kangan Project Tracker</h1>
    </div>
    <div class="form-container">
        <input 
        type="email" 
        class="input-box" 
        placeholder="Email" 
        bind:value={email} 
        />
        <input 
        type="password" 
        class="input-box" 
        placeholder="Password" 
        bind:value={password} 
        />
        <button on:click={handleSubmit} class="input-box">Login</button>
        {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
        {/if}
    </div>
</main>

<style>
    .form-container {
        border: 2px solid yellow;
        padding: 1rem;
        border-radius: 8px;
    }

    .header-logo {
        width: 50px;
        height: 50px;
        margin-right: 1rem;
    }

    .header-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }

    h1 {
        margin: 0;
    }

    h1 {
        text-align: center;
        margin-top: 2rem;
        font-family: Arial, sans-serif;
        color: #333;
    }

        .form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;
        }

        .input-box {
            margin: 0.5rem 0;
            padding: 0.5rem;
            width: 300px;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    </style>