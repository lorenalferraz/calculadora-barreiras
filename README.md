# Filtrar Barreiras e Gerar Relatório

Este widget carrega automaticamente a camada de Feature Service de alertas (barreiras) e permite pesquisar, filtrar e dar zoom em polígonos específicos através da coluna "codealerta", além de gerar relatórios HTML usando uma ferramenta de geoprocessamento específica para barreiras.

## Como usar

1. Adicione o widget à sua experiência no Experience Builder
2. Configure o widget para usar um widget de mapa
3. A camada será carregada automaticamente quando o mapa estiver disponível
4. Digite o valor da coluna "codealerta" no campo de pesquisa
5. Clique em "Filtrar" para aplicar o filtro e dar zoom no polígono correspondente
6. Clique em "Gerar Relatório" para chamar a ferramenta de geoprocessamento `processaralerta_barreiras` e abrir o relatório HTML em uma nova aba
7. Use o botão "Limpar Filtro" para remover o filtro e visualizar todos os polígonos novamente

## Como funciona

O widget utiliza a URL fixa da camada de alertas de barreiras:
- `https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/Barreiras_classificado/FeatureServer`

### Carregamento automático da camada

Quando o componente detecta que o mapa está disponível, ele automaticamente:
1. Carrega os módulos necessários da ArcGIS API for JavaScript
2. Cria uma FeatureLayer com a URL fixa
3. Adiciona a camada ao mapa

```tsx
// Carrega a camada automaticamente quando o mapa está disponível
loadFeatureLayer = () => {
  const layer = new this.FeatureLayer({
    url: this.FEATURE_SERVICE_URL
  })
  this.state.jimuMapView.view.map.add(layer)
}
```

### Pesquisa e filtro

O widget permite pesquisar polígonos pela coluna "codealerta":
- Executa uma query na camada para encontrar o polígono correspondente
- Aplica um filtro (definitionExpression) para mostrar apenas o polígono encontrado
- Faz zoom automático no polígono com nível de zoom 15

```tsx
// Pesquisa e filtra o polígono (exemplo simplificado)
const query = layer.createQuery()
query.where = `codealerta = '${escapedValue}'`
layer.queryFeatures(query).then((results) => {
  layer.definitionExpression = `codealerta = '${escapedValue}'`
  this.state.jimuMapView.view.goTo({
    target: results.features[0].geometry,
    zoom: 15
  })
})
```

## Requisitos

- Experience Builder 1.18.0 ou superior
- Um widget de mapa configurado na experiência
- Acesso à camada de Feature Service especificada

## Deploy no Portal do Experience Builder

### Opção 1: Upload via ZIP (Recomendado)

1. **Crie o pacote ZIP:**
   ```powershell
   .\package-widget.ps1
   ```
   Isso criará o arquivo `filtrar-e-baixar.zip`

2. **Faça upload no Portal:**
   - Acesse o Portal do Experience Builder como Administrador
   - Navegue até **Widgets** > **Custom Widgets**
   - Clique em **Add Widget** ou **Upload Widget**
   - Selecione o arquivo `filtrar-e-baixar.zip`
   - Aguarde o processamento e validação

3. **Use o widget:**
   - No Experience Builder, vá em **Insert** > **Widget**
   - Procure por "Filtrar e Baixar" na lista de widgets
   - Arraste para a experiência

### Opção 2: Deploy via Repositório Git

1. **Configure o repositório no Portal:**
   - Acesse o Portal do Experience Builder como Administrador
   - Navegue até **Widgets** > **Custom Widgets**
   - Clique em **Add from Git** (se disponível)
   - Informe a URL do repositório Git
   - Selecione o branch (geralmente `main`)
   - O Portal irá baixar e compilar automaticamente

2. **Nota sobre repositórios Git:**
   - O Portal precisa clonar o repositório completo para ter acesso a todos os arquivos
   - Certifique-se de que todos os arquivos necessários estão no repositório

3. **Validação:**
   - O Portal validará o `manifest.json` e os arquivos necessários
   - Se tudo estiver correto, o widget estará disponível

### Estrutura do Widget

O widget deve conter os seguintes arquivos:
```
filtrar-e-baixar/
├── manifest.json          # Metadados do widget (obrigatório)
├── config.json            # Configuração padrão
├── icon.svg               # Ícone do widget
├── dist/                  # Arquivos compilados
│   ├── runtime/
│   └── setting/
└── src/                   # Código fonte
    ├── config.ts
    ├── runtime/
    └── setting/
```

### Troubleshooting

Se o widget não aparecer após o deploy:
- Verifique se o `manifest.json` está correto
- Confirme que a versão do Experience Builder é compatível (1.18.0+)
- Verifique os logs do Portal em caso de erro
- Certifique-se de que todos os arquivos em `dist/` estão presentes
