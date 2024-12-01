async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/Produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaProduto(titulo, valor, imagem) {
    const conexao = await fetch("http://localhost:3000/Produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            valor: `$ ${valor}`,
            imagem: imagem,
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o produto");
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

async function deleteProduto(id) {
    const conexao = await fetch(`http://localhost:3000/Produtos/${id}`, {
        method: 'DELETE'
    });

    if (!conexao.ok) {
        throw new Error('Erro ao excluir o produto');
    }

    return conexao.json();
}

export const conectaApi = {
    listaProdutos,
    criaProduto,
    deleteProduto
}
