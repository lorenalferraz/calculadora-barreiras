System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/filtrar-e-gerar-relatorio-barreiras/src/runtime/translations/default.ts":
/*!*********************************************************************************************************!*\
  !*** ./your-extensions/widgets/filtrar-e-gerar-relatorio-barreiras/src/runtime/translations/default.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Filtrar Barreiras e Gerar Relatório',
    addLayer: 'Adicionar Camada',
    featureServiceUrl: 'URL do Feature Service',
    instructions: 'Digite o código do alerta',
    searchIdea: 'Pesquisar por código do alerta',
    filterAndZoom: 'Filtrar',
    generateReport: 'Gerar Relatório',
    clearFilter: 'Limpar Filtro',
    loading: 'Carregando...',
    layerLoaded: 'Camada carregada com sucesso!'
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************************************************************************!*\
  !*** ./your-extensions/widgets/filtrar-e-gerar-relatorio-barreiras/src/runtime/widget.tsx ***!
  \********************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/filtrar-e-gerar-relatorio-barreiras/src/runtime/translations/default.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable no-prototype-builtins */
/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/



class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            ideaSearchInput: '',
            jimuMapView: null,
            featureLayer: null,
            loading: false,
            initialExtent: null
        };
        // URL fixa da camada de alertas de barreiras
        this.FEATURE_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/Barreiras_classificado/FeatureServer';
        // URL da ferramenta de geoprocessamento (Barreiras)
        this.GP_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/testeoutput/processaralerta_barreiras/GPServer/relatorio_analise_barreiras';
        // Nome da task específica dentro da GP
        this.GP_TASK_NAME = 'relatorio_analise_barreiras';
        // Função chamada quando o valor da pesquisa muda
        this.handleIdeaSearchInputChange = (event) => {
            this.setState({
                ideaSearchInput: event.target.value
            });
        };
        // Carrega a camada automaticamente quando o componente é montado ou o mapa está disponível
        this.componentDidUpdate = (prevProps, prevState) => {
            if (this.state.jimuMapView && !this.state.featureLayer && !prevState.jimuMapView) {
                // Salva a visualização inicial quando o mapa é detectado pela primeira vez
                if (this.state.jimuMapView.view && !this.state.initialExtent) {
                    const currentExtent = this.state.jimuMapView.view.extent;
                    if (currentExtent) {
                        this.setState({
                            initialExtent: currentExtent.clone()
                        });
                    }
                }
                this.findExistingFeatureLayer();
            }
        };
        // Encontra a camada já existente no mapa (não adiciona camada)
        this.findExistingFeatureLayer = () => {
            var _a;
            if (!this.state.jimuMapView) {
                return;
            }
            this.setState({ loading: true });
            try {
                const map = (_a = this.state.jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map;
                if (!map) {
                    this.setState({ loading: false });
                    return;
                }
                // Procura uma FeatureLayer já adicionada com a mesma URL
                const targetUrl = this.FEATURE_SERVICE_URL;
                const allLayers = (map.allLayers && map.allLayers.toArray) ? map.allLayers.toArray() : [];
                const found = allLayers.find((lyr) => {
                    const url = (lyr && typeof lyr.url === 'string') ? lyr.url : '';
                    return url === targetUrl;
                });
                if (!found) {
                    console.warn('Camada não encontrada no mapa. URL procurada:', targetUrl);
                    alert('A camada de barreiras já deve estar no mapa, mas não foi encontrada. Verifique se ela está adicionada e visível.');
                    this.setState({ loading: false });
                    return;
                }
                // Salva referência da camada existente (não cria e não adiciona)
                this.setState({
                    featureLayer: found,
                    loading: false
                });
            }
            catch (e) {
                console.error('Erro ao localizar camada existente no mapa:', e);
                this.setState({ loading: false });
            }
        };
        // Função para filtrar e dar zoom no polígono baseado na pesquisa
        this.handleFilterAndZoom = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            // Casos de erro
            if (!this.state.jimuMapView) {
                alert('Por favor, configure um mapa no widget.');
                return;
            }
            if (!this.state.featureLayer) {
                alert('A camada ainda não foi carregada. Aguarde...');
                return;
            }
            if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
                alert('Por favor, digite o código do alerta para pesquisar na coluna codealerta.');
                return;
            }
            this.setState({ loading: true });
            // Carrega os módulos necessários
            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer',
                'esri/geometry/SpatialReference'
            ]).then((modules) => {
                [this.FeatureLayer, this.SpatialReference] = modules;
                const layer = this.state.featureLayer;
                const searchValue = this.state.ideaSearchInput.trim();
                // Escapa aspas simples para evitar SQL injection
                const escapedValue = searchValue.replace(/'/g, "''");
                // Verifica se a camada está carregada e obtém informações dos campos
                // Aguarda a camada estar completamente carregada
                const checkAndQuery = () => {
                    // Lista de possíveis nomes de coluna (prioriza codealerta para barreiras)
                    const possibleFieldNames = [
                        'codealerta', 'CODEALERTA', 'Codealerta',
                        'code_alerta', 'CODE_ALERTA',
                        'id_alerta', 'ID_ALERTA',
                        'idea', 'IDEA', 'Idea', 'ID', 'id', 'Id'
                    ];
                    let fieldName = 'codealerta'; // Padrão para barreiras
                    // Tenta encontrar o campo correto
                    if (layer.fields && layer.fields.length > 0) {
                        const foundField = layer.fields.find(field => possibleFieldNames.includes(field.name));
                        if (foundField) {
                            fieldName = foundField.name;
                        }
                        else {
                            // Se não encontrar, tenta fazer uma busca case-insensitive
                            const caseInsensitiveField = layer.fields.find(field => field.name.toLowerCase() === 'codealerta' || field.name.toLowerCase() === 'idea');
                            if (caseInsensitiveField) {
                                fieldName = caseInsensitiveField.name;
                            }
                            else {
                                // Log dos campos disponíveis para debug
                                console.log('Campos disponíveis na camada:', layer.fields.map(f => f.name));
                                // Tenta usar o primeiro campo que parece ser um ID
                                const idField = layer.fields.find(field => field.type === 'esriFieldTypeString' || field.type === 'esriFieldTypeInteger' || field.type === 'esriFieldTypeDouble');
                                if (idField) {
                                    fieldName = idField.name;
                                    console.log(`Usando campo: ${fieldName}`);
                                }
                            }
                        }
                    }
                    // Cria uma query para buscar o polígono pela coluna
                    // Usa LIKE para busca mais flexível e trata como string
                    const query = layer.createQuery();
                    // Tenta diferentes abordagens de query
                    // 1. Busca exata como string
                    // 2. Busca com LIKE para valores parciais
                    // 3. Busca como número (se o valor for numérico)
                    const hasSpecialChars = searchValue.indexOf('.') !== -1 || searchValue.indexOf('/') !== -1;
                    // Para valores com caracteres especiais (como "003.9.427074/2025"), usa apenas como string
                    if (hasSpecialChars) {
                        query.where = `${fieldName} = '${escapedValue}'`;
                    }
                    else {
                        // Se for um número simples, tenta como número e como string
                        const isNumeric = !isNaN(parseFloat(searchValue)) && isFinite(parseFloat(searchValue));
                        if (isNumeric) {
                            query.where = `${fieldName} = ${searchValue} OR ${fieldName} = '${escapedValue}'`;
                        }
                        else {
                            query.where = `${fieldName} = '${escapedValue}'`;
                        }
                    }
                    query.returnGeometry = true;
                    // Executa a query
                    layer.queryFeatures(query).then((results) => {
                        if (results.features.length === 0) {
                            // Se não encontrou, tenta com LIKE
                            const likeQuery = layer.createQuery();
                            likeQuery.where = `${fieldName} LIKE '%${escapedValue}%'`;
                            likeQuery.returnGeometry = true;
                            return layer.queryFeatures(likeQuery).then((likeResults) => {
                                if (likeResults.features.length === 0) {
                                    alert(`Nenhum polígono encontrado com ${fieldName} = ${searchValue}`);
                                    this.setState({ loading: false });
                                    return;
                                }
                                // Se encontrou com LIKE, usa o primeiro resultado
                                const foundGraphic = likeResults.features[0];
                                const actualValue = foundGraphic.attributes[fieldName];
                                this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue);
                            });
                        }
                        // Se encontrou, aplica filtro e zoom
                        const foundGraphic = results.features[0];
                        const actualValue = foundGraphic.attributes[fieldName];
                        this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue);
                    }).catch((error) => {
                        console.error('Erro ao pesquisar features:', error);
                        console.error('Detalhes do erro:', {
                            message: error.message,
                            details: error.details,
                            fieldName: fieldName,
                            searchValue: searchValue
                        });
                        // Tenta mostrar informações mais úteis
                        let errorMessage = 'Erro ao pesquisar. ';
                        if (layer.fields && layer.fields.length > 0) {
                            const fieldNames = layer.fields.map(f => f.name).join(', ');
                            errorMessage += `\n\nCampos disponíveis: ${fieldNames}`;
                        }
                        errorMessage += `\n\nVerifique se a coluna "${fieldName}" existe e se o valor "${searchValue}" está correto.`;
                        alert(errorMessage);
                        this.setState({ loading: false });
                    });
                };
                // Se a camada já está carregada, executa diretamente
                if (layer.loaded) {
                    checkAndQuery();
                }
                else {
                    // Aguarda a camada carregar
                    layer.when(() => {
                        checkAndQuery();
                    }).catch((error) => {
                        console.error('Erro ao carregar informações da camada:', error);
                        alert('Erro ao carregar informações da camada. Verifique se a camada está acessível.');
                        this.setState({ loading: false });
                    });
                }
            });
        });
        // Função auxiliar para aplicar filtro e zoom
        this.applyFilterAndZoom = (layer, graphic, fieldName, actualValue) => {
            // Obtém o valor real do atributo do graphic
            const attributeValue = graphic.attributes[fieldName];
            // Se o valor não foi passado, usa o do atributo
            const valueToFilter = actualValue !== undefined ? actualValue : attributeValue;
            // Escapa o valor para SQL (trata strings, números e null)
            let definitionExpression;
            if (valueToFilter === null || valueToFilter === undefined) {
                definitionExpression = `${fieldName} IS NULL`;
            }
            else if (typeof valueToFilter === 'number') {
                definitionExpression = `${fieldName} = ${valueToFilter}`;
            }
            else {
                // É uma string, precisa escapar aspas simples
                const escapedValue = String(valueToFilter).replace(/'/g, "''");
                definitionExpression = `${fieldName} = '${escapedValue}'`;
            }
            console.log(`Aplicando filtro: ${fieldName} = ${valueToFilter}`);
            console.log(`Definition Expression: ${definitionExpression}`);
            // Aplica o filtro na camada usando definitionExpression
            // Isso é o método correto para filtrar uma FeatureLayer e ocultar outros polígonos
            layer.definitionExpression = definitionExpression;
            // Força a atualização imediata da camada para aplicar o filtro
            layer.refresh();
            console.log('Filtro aplicado. A camada deve mostrar APENAS o polígono selecionado');
            console.log('Definition Expression:', definitionExpression);
            // Aguarda um pouco para garantir que o filtro seja processado
            // Aguarda que a camada esteja completamente carregada antes de aplicar o filtro
            if (layer.loaded) {
                // A camada já está carregada, aplica o filtro diretamente
                // Aguarda um pouco para garantir que o filtro seja aplicado
                setTimeout(() => {
                    // Verifica se o filtro foi aplicado
                    if (layer.definitionExpression === definitionExpression) {
                        console.log('Filtro confirmado na camada');
                    }
                    this.applyZoomAfterFilter(layer, graphic);
                }, 300);
            }
            else {
                // Aguarda a camada carregar primeiro
                layer.when(() => {
                    // Aplica o filtro novamente após carregar (garantia)
                    layer.definitionExpression = definitionExpression;
                    layer.refresh();
                    setTimeout(() => {
                        this.applyZoomAfterFilter(layer, graphic);
                    }, 300);
                }).catch((error) => {
                    console.error('Erro ao aguardar camada:', error);
                    // Mesmo assim tenta aplicar o zoom
                    this.applyZoomAfterFilter(layer, graphic);
                });
            }
        };
        // Função auxiliar para aplicar zoom após o filtro
        this.applyZoomAfterFilter = (layer, graphic) => {
            // Aguarda um pouco para garantir que o filtro seja processado pela camada
            // O definitionExpression precisa de tempo para ser processado
            setTimeout(() => {
                // Dá zoom no polígono encontrado com padding para não cortar
                if (graphic.geometry && this.state.jimuMapView && this.state.jimuMapView.view) {
                    // Usa goTo com target e padding em pixels para controlar melhor o zoom
                    // Padding de 50 pixels em cada lado para não cortar o polígono
                    this.state.jimuMapView.view.goTo({
                        target: graphic.geometry,
                        padding: {
                            left: 50,
                            right: 50,
                            top: 50,
                            bottom: 50
                        }
                    }, {
                        duration: 500
                    }).then(() => {
                        console.log('Zoom aplicado no polígono filtrado com padding');
                        this.setState({ loading: false });
                    }).catch((error) => {
                        console.error('Erro ao dar zoom:', error);
                        // Fallback: tenta zoom com extent calculado manualmente
                        try {
                            const extent = graphic.geometry.extent;
                            // Adiciona 10% de padding calculado a partir do tamanho do extent
                            const paddingFactor = 0.1;
                            const width = extent.width;
                            const height = extent.height;
                            const paddedExtent = extent.expand(width * paddingFactor, height * paddingFactor);
                            this.state.jimuMapView.view.goTo(paddedExtent, {
                                duration: 500
                            }).then(() => {
                                console.log('Zoom aplicado usando extent com padding calculado');
                                this.setState({ loading: false });
                            }).catch((fallbackError) => {
                                console.error('Erro no zoom de fallback:', fallbackError);
                                this.setState({ loading: false });
                            });
                        }
                        catch (calcError) {
                            console.error('Erro ao calcular extent:', calcError);
                            this.setState({ loading: false });
                        }
                    });
                }
                else {
                    this.setState({ loading: false });
                }
            }, 500);
        };
        // Função para limpar o filtro
        this.handleClearFilter = () => {
            if (this.state.featureLayer) {
                // Remove o filtro definindo definitionExpression como vazio ou null
                this.state.featureLayer.definitionExpression = null;
                this.state.featureLayer.refresh();
                console.log('Filtro removido - todos os alertas devem aparecer novamente');
                // Aguarda um pouco para garantir que o filtro seja removido
                setTimeout(() => {
                    // Verifica se o filtro foi removido
                    if (!this.state.featureLayer.definitionExpression || this.state.featureLayer.definitionExpression === '') {
                        console.log('Filtro confirmado como removido');
                    }
                    // Restaura a visualização inicial do mapa
                    if (this.state.jimuMapView && this.state.jimuMapView.view) {
                        if (this.state.initialExtent) {
                            // Restaura a extensão inicial salva
                            this.state.jimuMapView.view.goTo(this.state.initialExtent, {
                                duration: 500
                            }).then(() => {
                                console.log('Visualização inicial restaurada');
                            }).catch((error) => {
                                console.error('Erro ao restaurar visualização inicial:', error);
                                // Se falhar, tenta fazer zoom para a camada completa
                                if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
                                    this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent, {
                                        duration: 500
                                    });
                                }
                            });
                        }
                        else {
                            // Se não tiver extensão inicial salva, tenta fazer zoom para a camada completa
                            if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
                                this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent, {
                                    duration: 500
                                }).then(() => {
                                    console.log('Zoom para camada completa aplicado');
                                }).catch((error) => {
                                    console.error('Erro ao fazer zoom para camada completa:', error);
                                });
                            }
                        }
                    }
                }, 300);
                this.setState({
                    ideaSearchInput: ''
                });
            }
        };
        // Função para gerar relatório usando a ferramenta de geoprocessamento
        this.handleGenerateReport = () => __awaiter(this, void 0, void 0, function* () {
            // Declara variáveis no escopo da função para que estejam acessíveis no catch
            let alertCode = '';
            let paramName = null;
            let executeUrl = '';
            let token = null;
            // Validações iniciais
            if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
                alert('Por favor, digite o código do alerta para gerar o relatório.');
                return;
            }
            alertCode = this.state.ideaSearchInput.trim();
            // Remove espaços extras e caracteres invisíveis
            alertCode = alertCode.replace(/\s+/g, '').trim();
            // Validação simples de comprimento mínimo
            if (alertCode.length < 3) {
                alert('O código do alerta parece estar muito curto. Verifique se digitou corretamente.');
                return;
            }
            console.log('=== VALIDAÇÃO DO VALOR (CÓDIGO DO ALERTA) ===');
            console.log('Valor original:', this.state.ideaSearchInput);
            console.log('Valor processado:', alertCode);
            console.log('Comprimento:', alertCode.length);
            this.setState({ loading: true });
            try {
                console.log('Iniciando geração de relatório para código de alerta:', alertCode);
                // Carrega IdentityManager para obter token de autenticação
                console.log('Carregando IdentityManager para autenticação...');
                const identityModules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/identity/IdentityManager'
                ]);
                const [IdentityManager] = identityModules;
                // Obtém o token para a URL do serviço (já declarado no início da função)
                try {
                    const credential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                    if (credential && credential.token) {
                        token = credential.token;
                        console.log('Token encontrado via IdentityManager');
                    }
                    else {
                        // Tenta gerar token automaticamente
                        const serverInfo = IdentityManager.findServerInfo(this.GP_SERVICE_URL);
                        if (serverInfo) {
                            console.log('Obtendo token automaticamente...');
                            yield IdentityManager.checkSignInStatus(this.GP_SERVICE_URL);
                            const updatedCredential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                            if (updatedCredential && updatedCredential.token) {
                                token = updatedCredential.token;
                                console.log('Token obtido automaticamente');
                            }
                        }
                    }
                }
                catch (tokenError) {
                    console.warn('Erro ao obter token, tentando sem autenticação:', tokenError);
                }
                // Função auxiliar para adicionar token às URLs
                const addTokenToUrl = (url) => {
                    if (!token) {
                        return url;
                    }
                    try {
                        const urlObj = new URL(url);
                        urlObj.searchParams.set('token', token);
                        return urlObj.toString();
                    }
                    catch (e) {
                        // Se a URL não for absoluta, trata como string
                        const separator = url.includes('?') ? '&' : '?';
                        return `${url}${separator}token=${encodeURIComponent(token)}`;
                    }
                };
                // Primeiro, vamos obter informações sobre a task específica para descobrir os parâmetros
                console.log('Obtendo informações da task específica...');
                // A URL base já aponta para a task específica, então não precisa adicionar o nome da task novamente
                // const taskNameEncoded = encodeURIComponent(this.GP_TASK_NAME)
                const infoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                console.log('URL de informações da task:', infoUrl);
                // Tenta obter informações da task específica primeiro
                let gpInfo;
                try {
                    const taskInfoResponse = yield fetch(infoUrl);
                    if (taskInfoResponse.ok) {
                        gpInfo = yield taskInfoResponse.json();
                        console.log('Informações da task específica obtidas com sucesso');
                        console.log('Informações completas da task:', JSON.stringify(gpInfo, null, 2));
                    }
                    else {
                        // Se falhar, tenta da GP geral
                        console.warn('Não foi possível obter informações da task, tentando da GP geral...');
                        const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                        const gpInfoResponse = yield fetch(gpInfoUrl);
                        if (!gpInfoResponse.ok) {
                            throw new Error(`Erro ao obter informações: ${taskInfoResponse.status} ${taskInfoResponse.statusText}`);
                        }
                        gpInfo = yield gpInfoResponse.json();
                        console.log('Usando informações da GP geral');
                        console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2));
                    }
                }
                catch (infoError) {
                    // Se falhar, tenta da GP geral
                    console.warn('Erro ao obter informações da task, tentando da GP geral...', infoError);
                    const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                    const gpInfoResponse = yield fetch(gpInfoUrl);
                    gpInfo = yield gpInfoResponse.json();
                    console.log('Usando informações da GP geral (fallback)');
                    console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2));
                }
                // Descobre qual é o parâmetro de entrada da GP
                // IMPORTANTE: Devemos usar exatamente o nome do parâmetro que a GP espera
                // O widget recebe o valor da coluna "codealerta", mas envia com o nome que a GP espera
                let paramName = null;
                let paramInfo = null;
                if (gpInfo.parameters && Array.isArray(gpInfo.parameters)) {
                    console.log('=== PARÂMETROS DISPONÍVEIS NA GP ===');
                    const allParams = gpInfo.parameters.map(p => ({
                        name: p.name,
                        displayName: p.displayName || p.name,
                        dataType: p.dataType,
                        direction: p.direction,
                        parameterType: p.parameterType,
                        required: p.parameterType === 'esriGPParameterTypeRequired' || p.required === true
                    }));
                    console.log('Todos os parâmetros:', JSON.stringify(allParams, null, 2));
                    // Procura pelo primeiro parâmetro de entrada (input)
                    const inputParams = gpInfo.parameters.filter(p => (p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput') &&
                        p.name);
                    console.log('Parâmetros de entrada encontrados:', inputParams.map(p => ({
                        name: p.name,
                        displayName: p.displayName || p.name,
                        dataType: p.dataType,
                        required: p.parameterType === 'esriGPParameterTypeRequired' || p.required === true
                    })));
                    if (inputParams.length > 0) {
                        // Usa o primeiro parâmetro de entrada (que é o que a GP espera)
                        paramInfo = inputParams[0];
                        paramName = paramInfo.name; // Usa exatamente o nome que a GP espera (pode ter caracteres especiais)
                        console.log('=== PARÂMETRO SELECIONADO ===');
                        console.log('Nome técnico do parâmetro (será usado no request):', paramName);
                        console.log('Nome de exibição (label na interface):', paramInfo.displayName || paramInfo.name);
                        console.log('Detalhes completos:', {
                            name: paramInfo.name,
                            displayName: paramInfo.displayName || paramInfo.name,
                            dataType: paramInfo.dataType,
                            direction: paramInfo.direction,
                            required: paramInfo.parameterType === 'esriGPParameterTypeRequired' || paramInfo.required === true
                        });
                    }
                    else {
                        console.error('Nenhum parâmetro de entrada encontrado na GP!');
                        throw new Error('Não foi possível identificar o parâmetro de entrada da ferramenta de geoprocessamento.');
                    }
                }
                else {
                    console.error('Não foi possível obter parâmetros da GP!');
                    throw new Error('Não foi possível obter informações dos parâmetros da ferramenta de geoprocessamento.');
                }
                // Confirma qual parâmetro será usado (deve ser exatamente o que a GP espera)
                console.log('=== PARÂMETRO PARA ENVIAR À GP ===');
                console.log('Nome do parâmetro (exatamente como a GP espera):', paramName);
                console.log('Valor que será enviado (da coluna codealerta do widget):', alertCode);
                console.log('Detalhes completos do parâmetro:', paramInfo);
                // Verifica o tipo do parâmetro para formatar corretamente
                let paramValue = alertCode;
                if (paramInfo) {
                    console.log('Tipo de dado do parâmetro:', paramInfo.dataType);
                    console.log('Tipo de parâmetro:', paramInfo.parameterType);
                    // Se o parâmetro for do tipo GPString ou similar, envia como string
                    // Se for URL ou outro tipo complexo, pode precisar de formato diferente
                    if (paramInfo.dataType === 'GPString' || paramInfo.dataType === 'esriGPTypeString') {
                        paramValue = String(alertCode);
                    }
                    else if (paramInfo.dataType === 'GPDouble' || paramInfo.dataType === 'esriGPTypeDouble' ||
                        paramInfo.dataType === 'GPLong' || paramInfo.dataType === 'esriGPTypeLong') {
                        // Se for numérico, tenta converter
                        const numValue = parseFloat(alertCode);
                        if (!isNaN(numValue)) {
                            paramValue = numValue;
                        }
                    }
                }
                // Prepara os parâmetros para a execução
                // IMPORTANTE: f=json vai na URL, não no body
                // Apenas os parâmetros da GP vão no body
                const params = {
                    [paramName]: paramValue
                };
                console.log('=== PARÂMETROS PARA ENVIAR ===');
                console.log('Parâmetros preparados (para o body):', params);
                console.log('Valor do parâmetro:', paramValue, 'Tipo:', typeof paramValue);
                console.log('Nome do parâmetro (exato):', paramName);
                console.log('Nome do parâmetro (JSON):', JSON.stringify(paramName));
                // Formata os parâmetros como form-urlencoded
                const formData = new URLSearchParams();
                // Adiciona os parâmetros (exceto f=json que vai na URL)
                // IMPORTANTE: Usa o nome exato do parâmetro como está na GP (pode ter caracteres especiais)
                console.log('=== PREPARANDO FORM DATA ===');
                Object.keys(params).forEach(key => {
                    if (key !== 'f') {
                        const paramKey = key; // Usa exatamente o nome que veio da GP (ex: "N° IDEA", "valor_alerta", etc.)
                        const paramVal = String(params[key]);
                        formData.append(paramKey, paramVal);
                        console.log(`Parâmetro adicionado: nome="${paramKey}" valor="${paramVal}"`);
                        console.log(`  - Nome (JSON): ${JSON.stringify(paramKey)}`);
                        console.log(`  - Nome (bytes): ${Array.from(paramKey).map(c => c.charCodeAt(0)).join(',')}`);
                        console.log(`  - Valor (JSON): ${JSON.stringify(paramVal)}`);
                    }
                });
                const formDataString = formData.toString();
                console.log('FormData completo (string):', formDataString);
                console.log('FormData completo (URL decoded):', decodeURIComponent(formDataString));
                // Adiciona token ao body
                if (token) {
                    formData.append('token', token);
                    console.log('Token adicionado ao body');
                }
                // Função auxiliar para fazer a requisição
                const makeExecuteRequest = (url) => __awaiter(this, void 0, void 0, function* () {
                    // Adiciona token na URL também (alguns servidores ArcGIS exigem isso)
                    let finalUrl = url;
                    if (token) {
                        const urlWithToken = new URL(url);
                        urlWithToken.searchParams.set('token', token);
                        urlWithToken.searchParams.set('f', 'json');
                        finalUrl = urlWithToken.toString();
                    }
                    else {
                        // Se não tiver token, adiciona apenas f=json
                        const urlObj = new URL(url);
                        urlObj.searchParams.set('f', 'json');
                        finalUrl = urlObj.toString();
                    }
                    console.log('Tentando URL:', finalUrl);
                    console.log('Body (formData):', formData.toString());
                    console.log('Token presente:', !!token);
                    console.log('Parâmetros enviados:', Object.keys(params));
                    const response = yield fetch(finalUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
                    return response;
                });
                // Verifica se a task é assíncrona para decidir qual endpoint usar
                const isAsync = gpInfo.executionType === 'esriExecutionTypeAsynchronous';
                console.log('=== TENTANDO EXECUTAR GP ===');
                console.log('Tipo de execução:', gpInfo.executionType);
                console.log('É assíncrona?', isAsync);
                console.log('Tentando primeiro com task específica:', this.GP_TASK_NAME);
                console.log('Parâmetro que será enviado:', paramName);
                console.log('Valor que será enviado:', alertCode);
                console.log('GP_SERVICE_URL:', this.GP_SERVICE_URL);
                // Primeiro tenta com o endpoint direto (já que a URL base já aponta para a task específica)
                // Se for assíncrona, usa submitJob; caso contrário, usa execute
                if (isAsync) {
                    // Tenta primeiro sem o nome da task (URL base já aponta para relatorio_analise_barreiras)
                    executeUrl = `${this.GP_SERVICE_URL}/submitJob`;
                    console.log('Usando endpoint direto /submitJob (tarefa assíncrona):', executeUrl);
                }
                else {
                    executeUrl = `${this.GP_SERVICE_URL}/execute`;
                    console.log('Usando endpoint direto /execute (tarefa síncrona):', executeUrl);
                }
                let executeResponse = yield makeExecuteRequest(executeUrl);
                // Se der erro 500, pode ser que o endpoint da task específica não exista
                // Tenta com o endpoint da GP raiz
                if (!executeResponse.ok) {
                    let resultText = yield executeResponse.text();
                    console.warn('Primeira tentativa falhou. Status:', executeResponse.status);
                    console.warn('Resposta (primeiros 500 chars):', resultText.substring(0, 500));
                    try {
                        const resultJson = JSON.parse(resultText);
                        if (resultJson.error && resultJson.error.code === 500) {
                            console.warn('Erro 500 com task específica, tentando com endpoint da GP raiz...');
                            // Tenta com o endpoint raiz usando o mesmo tipo (submitJob ou execute)
                            if (isAsync) {
                                executeUrl = `${this.GP_SERVICE_URL}/submitJob`;
                                console.log('Tentando com endpoint da GP raiz (submitJob):', executeUrl);
                            }
                            else {
                                executeUrl = `${this.GP_SERVICE_URL}/execute`;
                                console.log('Tentando com endpoint da GP raiz (execute):', executeUrl);
                            }
                            executeResponse = yield makeExecuteRequest(executeUrl);
                        }
                    }
                    catch (e) {
                        console.error('Erro ao parsear resposta:', e);
                        // Se não conseguir parsear, continua com o erro original
                    }
                }
                // Lê a resposta mesmo se não for OK para ver o erro detalhado
                let result;
                try {
                    result = yield executeResponse.json();
                    console.log('=== RESPOSTA COMPLETA DO SUBMITJOB ===');
                    console.log('Status HTTP:', executeResponse.status, executeResponse.statusText);
                    console.log('Resposta do execute (JSON):', JSON.stringify(result, null, 2));
                    console.log('result.jobId:', result.jobId);
                    console.log('result.jobID:', result.jobID); // Alguns serviços usam jobID
                    console.log('result.JobId:', result.JobId); // Outras variações possíveis
                    console.log('Todas as chaves do result:', Object.keys(result || {}));
                }
                catch (jsonError) {
                    // Se não conseguir ler como JSON, lê como texto
                    const textResponse = yield executeResponse.text();
                    console.error('Resposta não é JSON:', textResponse);
                    console.error('Status HTTP:', executeResponse.status, executeResponse.statusText);
                    throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - Resposta: ${textResponse.substring(0, 500)}`);
                }
                if (!executeResponse.ok) {
                    // Se a resposta tem um erro no JSON, usa ele
                    if (result.error) {
                        console.error('=== ERRO DETALHADO DA GP ===');
                        console.error('Código do erro:', result.error.code);
                        console.error('Mensagem:', result.error.message);
                        console.error('Detalhes:', result.error.details);
                        console.error('Erro completo:', JSON.stringify(result.error, null, 2));
                        // Mensagem de erro mais amigável
                        let errorMessage = 'Erro ao executar a ferramenta de geoprocessamento.\n\n';
                        if (result.error.code === 500) {
                            errorMessage += 'Erro interno do servidor (500).\n\n';
                            errorMessage += 'Possíveis causas:\n';
                            errorMessage += '1. O número de idea pode não existir no servidor\n';
                            errorMessage += '2. Problema no processamento da ferramenta\n';
                            errorMessage += '3. O servidor pode estar temporariamente indisponível\n\n';
                            errorMessage += `Valor enviado: ${ideaNumber}\n`;
                            errorMessage += `Parâmetro usado: ${paramName}\n\n`;
                            errorMessage += 'Verifique:\n';
                            errorMessage += '- Se o número de idea está correto\n';
                            errorMessage += '- Se o valor existe na camada de alertas\n';
                            errorMessage += '- Abra o console (F12) para mais detalhes';
                        }
                        else {
                            errorMessage += `Código: ${result.error.code}\n`;
                            errorMessage += `Mensagem: ${result.error.message}\n\n`;
                            if (result.error.details && result.error.details.length > 0) {
                                errorMessage += `Detalhes: ${result.error.details.join(', ')}\n\n`;
                            }
                        }
                        alert(errorMessage);
                        throw new Error(`Erro na GP: ${JSON.stringify(result.error)}`);
                    }
                    // Se não tiver campo error, mas o status não é OK, mostra o resultado completo
                    console.error('Erro HTTP:', executeResponse.status, executeResponse.statusText);
                    console.error('Resposta completa:', result);
                    alert(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText}\n\nVerifique o console (F12) para mais detalhes.`);
                    throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - ${JSON.stringify(result)}`);
                }
                // Verifica se a resposta contém um jobId (tarefa assíncrona)
                // Para tarefas assíncronas, submitJob sempre retorna jobId
                // Alguns serviços podem usar variações: jobId, jobID, JobId
                const jobId = result.jobId || result.jobID || result.JobId;
                if (isAsync || result.jobId || result.jobID || result.JobId) {
                    if (!jobId) {
                        console.error('=== ERRO: JobId não encontrado na resposta ===');
                        console.error('Resposta completa:', JSON.stringify(result, null, 2));
                        console.error('isAsync:', isAsync);
                        console.error('Chaves disponíveis:', Object.keys(result || {}));
                        throw new Error(`Tarefa assíncrona mas não recebeu jobId na resposta. Resposta: ${JSON.stringify(result)}`);
                    }
                    console.log('Tarefa assíncrona detectada. Job ID:', jobId);
                    // Polling do status do job
                    let attempts = 0;
                    const maxAttempts = 60;
                    let jobStatus = null;
                    while (attempts < maxAttempts) {
                        yield new Promise(resolve => setTimeout(resolve, 1000));
                        // URL para verificar status do job
                        // Usa a mesma URL base que funcionou (pode ser submitJob ou execute)
                        const baseUrl = executeUrl.replace('/submitJob', '').replace('/execute', '');
                        const statusUrl = token
                            ? `${baseUrl}/jobs/${jobId}?token=${token}&f=json`
                            : `${baseUrl}/jobs/${jobId}?f=json`;
                        console.log('Verificando status do job:', statusUrl);
                        const statusResponse = yield fetch(statusUrl);
                        if (!statusResponse.ok) {
                            throw new Error(`Erro ao verificar status do job: ${statusResponse.status}`);
                        }
                        jobStatus = yield statusResponse.json();
                        console.log(`Status do job (tentativa ${attempts + 1}):`, jobStatus.jobStatus);
                        if (jobStatus.jobStatus === 'esriJobSucceeded') {
                            // Obtém os resultados
                            // Usa a mesma URL base que funcionou (pode ser submitJob ou execute)
                            const baseUrl = executeUrl.replace('/submitJob', '').replace('/execute', '');
                            const resultUrl = token
                                ? `${baseUrl}/jobs/${jobId}/results?token=${token}&f=json`
                                : `${baseUrl}/jobs/${jobId}/results?f=json`;
                            const resultResponse = yield fetch(resultUrl);
                            if (!resultResponse.ok) {
                                throw new Error(`Erro ao obter resultados: ${resultResponse.status}`);
                            }
                            result = yield resultResponse.json();
                            console.log('Resultado da execução assíncrona:', result);
                            break;
                        }
                        else if (jobStatus.jobStatus === 'esriJobFailed') {
                            throw new Error(`Job falhou: ${jobStatus.messages ? JSON.stringify(jobStatus.messages) : 'Erro desconhecido'}`);
                        }
                        else if (jobStatus.jobStatus === 'esriJobCancelled') {
                            throw new Error('Job foi cancelado');
                        }
                        attempts++;
                    }
                    if (attempts >= maxAttempts) {
                        throw new Error('Timeout: O job demorou mais de 60 segundos para completar');
                    }
                }
                else {
                    // Tarefa síncrona - resultado já está disponível
                    console.log('Tarefa síncrona - resultado já disponível');
                }
                console.log('Resultado completo da GP:', JSON.stringify(result, null, 2));
                // Processa o resultado - procura pela URL do HTML
                let htmlUrl = null;
                // Para tarefas assíncronas, os resultados podem estar em uma estrutura diferente
                // Primeiro, verifica se há erros
                if (result.error) {
                    console.error('Erro encontrado no resultado:', result.error);
                    throw new Error(`Erro na GP: ${JSON.stringify(result.error)}`);
                }
                // Procura em result.results (estrutura comum para tarefas síncronas)
                if (result.results && Array.isArray(result.results)) {
                    for (const resultItem of result.results) {
                        // O resultado pode estar diretamente no resultItem ou em resultItem.value
                        const value = resultItem.value !== undefined ? resultItem.value : resultItem;
                        if (typeof value === 'string' && value.includes('.html')) {
                            htmlUrl = value;
                            break;
                        }
                        else if (value && typeof value === 'object') {
                            // Procura por propriedades comuns que contêm URLs
                            if (value.url && typeof value.url === 'string' && value.url.includes('.html')) {
                                htmlUrl = value.url;
                                break;
                            }
                            else if (value.pathUrl && typeof value.pathUrl === 'string') {
                                htmlUrl = value.pathUrl;
                                break;
                            }
                            else if (value.value && typeof value.value === 'string' && value.value.includes('.html')) {
                                htmlUrl = value.value;
                                break;
                            }
                        }
                    }
                }
                // Para tarefas assíncronas, os resultados podem estar em result.results como objeto
                if (!htmlUrl && result.results && typeof result.results === 'object' && !Array.isArray(result.results)) {
                    // Itera sobre as propriedades do objeto results
                    for (const key in result.results) {
                        const resultItem = result.results[key];
                        if (resultItem && resultItem.value) {
                            const value = resultItem.value;
                            if (typeof value === 'string' && value.includes('.html')) {
                                htmlUrl = value;
                                break;
                            }
                            else if (value.url && typeof value.url === 'string' && value.url.includes('.html')) {
                                htmlUrl = value.url;
                                break;
                            }
                            else if (value.pathUrl && typeof value.pathUrl === 'string') {
                                htmlUrl = value.pathUrl;
                                break;
                            }
                        }
                    }
                }
                // Procura em outras propriedades do resultado
                if (!htmlUrl && result.outputUrl) {
                    htmlUrl = result.outputUrl;
                }
                if (!htmlUrl && result.url) {
                    htmlUrl = result.url;
                }
                if (!htmlUrl && result.fileUrl) {
                    htmlUrl = result.fileUrl;
                }
                if (!htmlUrl && result.outputFile) {
                    htmlUrl = result.outputFile;
                }
                // Busca por regex em todo o objeto (último recurso)
                if (!htmlUrl) {
                    const resultString = JSON.stringify(result);
                    const urlMatch = resultString.match(/https?:\/\/[^\s"<>]+\.html/g);
                    if (urlMatch && urlMatch.length > 0) {
                        htmlUrl = urlMatch[0];
                    }
                }
                if (htmlUrl) {
                    console.log('URL do HTML encontrada:', htmlUrl);
                    // Abre o HTML em uma nova guia
                    window.open(htmlUrl, '_blank');
                    this.setState({ loading: false });
                }
                else {
                    // Se não encontrou a URL, mostra o resultado completo para debug
                    console.warn('Não foi possível encontrar a URL do HTML no resultado:', result);
                    console.warn('Resultado completo:', JSON.stringify(result, null, 2));
                    alert('Relatório gerado, mas não foi possível encontrar a URL do HTML. Verifique o console do navegador (F12) para ver os detalhes do resultado.');
                    this.setState({ loading: false });
                }
            }
            catch (error) {
                console.error('=== ERRO COMPLETO AO EXECUTAR GP ===');
                console.error('Erro:', error);
                console.error('Mensagem:', error.message);
                console.error('Stack trace:', error.stack);
                console.error('Tipo do erro:', error.constructor.name);
                // Informações de contexto para debug
                console.error('=== CONTEXTO DO ERRO ===');
                console.error('Valor enviado (código do alerta):', alertCode);
                console.error('Parâmetro usado:', paramName);
                console.error('URL tentada:', executeUrl);
                console.error('Token presente:', !!token);
                let errorMessage = 'Erro ao gerar relatório.\n\n';
                if (error.message) {
                    // Remove informações técnicas muito longas para o usuário
                    let cleanMessage = error.message;
                    if (cleanMessage.length > 200) {
                        cleanMessage = cleanMessage.substring(0, 200) + '...';
                    }
                    errorMessage += `Mensagem: ${cleanMessage}\n\n`;
                }
                if (error.details && Array.isArray(error.details) && error.details.length > 0) {
                    errorMessage += `Detalhes: ${error.details[0]}\n\n`;
                }
                errorMessage += 'Verifique:\n';
                errorMessage += `1. Se o código do alerta "${alertCode}" está correto\n`;
                errorMessage += '2. Se o valor existe na camada de alertas de barreiras\n';
                errorMessage += '3. Se a ferramenta de geoprocessamento está acessível\n';
                errorMessage += '4. Abra o console do navegador (F12) para mais detalhes técnicos\n\n';
                errorMessage += 'Dica: Tente usar o botão "Filtrar" primeiro para verificar se o código existe.';
                alert(errorMessage);
                this.setState({ loading: false });
            }
        });
    }
    render() {
        var _a;
        const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .widget-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      form > div {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 20px;
        }
        button {
          min-width: 100px;
          padding: 8px 16px;
          border: none;
          border-radius: 20px;
          background-color: #266640;
          color: white;
          cursor: pointer;
          &:hover {
            background-color: #1e4f32;
          }
          &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }
        }
      }
      .report-button {
        background-color: #266640;
        color: white;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        cursor: pointer !important;
        transition: all 0.2s ease;
        pointer-events: auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        &:hover:not(:disabled) {
          background-color: #1e4f32;
          cursor: pointer !important;
        }
        &:active:not(:disabled) {
          cursor: pointer !important;
        }
        &:focus:not(:disabled) {
          cursor: pointer !important;
        }
        &:disabled {
          background-color: #ccc;
          color: #9e9e9e;
          cursor: not-allowed !important;
          opacity: 0.6;
          pointer-events: none;
        }
        &:not(:disabled) {
          cursor: pointer !important;
        }
      }
      .spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 0.8s linear infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
      .clear-button {
        background-color: #e0e0e0;
        color: #424242;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: #bdbdbd;
          color: #212121;
        }
        &:disabled {
          background-color: #f5f5f5;
          color: #9e9e9e;
          cursor: not-allowed;
        }
      }
      .status-message {
        padding: 8px;
        background-color: #e7f3ff;
        border-radius: 4px;
        font-size: 14px;
      }
      .loading {
        color: #0079c1;
      }
    `;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-addLayers jimu-widget p-2", css: style },
            this.props.hasOwnProperty('useMapWidgetIds') &&
                this.props.useMapWidgetIds &&
                this.props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => {
                    this.setState({
                        jimuMapView: jmv
                    });
                } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-container" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].instructions),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: this.handleFilterAndZoom },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].searchIdea, value: this.state.ideaSearchInput, onChange: this.handleIdeaSearchInputChange, disabled: !this.state.featureLayer || this.state.loading }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", disabled: !this.state.featureLayer || this.state.loading }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].filterAndZoom))),
                this.state.featureLayer && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "report-button", onClick: this.handleGenerateReport, disabled: this.state.loading || !this.state.ideaSearchInput || this.state.ideaSearchInput.trim() === '', title: this.state.loading || !this.state.ideaSearchInput || this.state.ideaSearchInput.trim() === ''
                            ? 'Digite o código do alerta para gerar o relatório'
                            : 'Gerar relatório para o código de alerta informado' },
                        this.state.loading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "spinner" }),
                        _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].generateReport),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "clear-button", onClick: this.handleClearFilter, disabled: this.state.loading }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].clearFilter))))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvLWJhcnJlaXJhcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSxxQ0FBcUM7SUFDbkQsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsWUFBWSxFQUNWLDJCQUEyQjtJQUM3QixVQUFVLEVBQUUsZ0NBQWdDO0lBQzVDLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsV0FBVyxFQUFFLGVBQWU7SUFDNUIsT0FBTyxFQUFFLGVBQWU7SUFDeEIsV0FBVyxFQUFFLCtCQUErQjtDQUM3Qzs7Ozs7Ozs7Ozs7O0FDWkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsMENBQTBDO0FBQzFDLGVBQWU7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFO0FBQzhEO0FBSzVDO0FBSWdDO0FBVXJDLE1BQU0sTUFBTyxTQUFRLDRDQUFLLENBQUMsYUFHekM7SUFIRDs7UUFVRSxVQUFLLEdBQUc7WUFDTixlQUFlLEVBQUUsRUFBRTtZ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QyxlQUFlLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUN2RyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFOzRCQUNsRyxDQUFDLENBQUMsa0RBQWtEOzRCQUNwRCxDQUFDLENBQUMsbURBQW1EO3dCQUV0RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSx5REFBTSxTQUFTLEVBQUMsU0FBUyxHQUFRO3dCQUN2RCw2REFBZSxDQUFDLGNBQWMsQ0FDeEI7b0JBQ1QsMkRBQ0UsU0FBUyxFQUFDLGNBQWMsRUFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUUzQiw2REFBZSxDQUFDLFdBQVcsQ0FDckIsQ0FDUixDQUNKLENBQ0csQ0FDRixDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJhci1lLWdlcmFyLXJlbGF0b3Jpby1iYXJyZWlyYXMvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvLWJhcnJlaXJhcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnRmlsdHJhciBCYXJyZWlyYXMgZSBHZXJhciBSZWxhdMOzcmlvJyxcbiAgYWRkTGF5ZXI6ICdBZGljaW9uYXIgQ2FtYWRhJyxcbiAgZmVhdHVyZVNlcnZpY2VVcmw6ICdVUkwgZG8gRmVhdHVyZSBTZXJ2aWNlJyxcbiAgaW5zdHJ1Y3Rpb25zOlxuICAgICdEaWdpdGUgbyBjw7NkaWdvIGRvIGFsZXJ0YScsXG4gIHNlYXJjaElkZWE6ICdQZXNxdWlzYXIgcG9yIGPDs2RpZ28gZG8gYWxlcnRhJyxcbiAgZmlsdGVyQW5kWm9vbTogJ0ZpbHRyYXInLFxuICBnZW5lcmF0ZVJlcG9ydDogJ0dlcmFyIFJlbGF0w7NyaW8nLFxuICBjbGVhckZpbHRlcjogJ0xpbXBhciBGaWx0cm8nLFxuICBsb2FkaW5nOiAnQ2FycmVnYW5kby4uLicsXG4gIGxheWVyTG9hZGVkOiAnQ2FtYWRhIGNhcnJlZ2FkYSBjb20gc3VjZXNzbyEnXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG4vKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGNzcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyxcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXG4gIHR5cGUgSmltdU1hcFZpZXdcbn0gZnJvbSAnamltdS1hcmNnaXMnXG5cbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGlkZWFTZWFyY2hJbnB1dDogc3RyaW5nXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlld1xuICBmZWF0dXJlTGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXJcbiAgbG9hZGluZzogYm9vbGVhblxuICBpbml0aWFsRXh0ZW50OiBfX2VzcmkuRXh0ZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG5BbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sXG5JU3RhdGVcbj4ge1xuICAvLyBHaXZlIHR5cGVzIHRvIHRoZSBtb2R1bGVzIHdlIGltcG9ydCBmcm9tIHRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0XG4gIC8vIHRvIHRlbGwgVHlwZVNjcmlwdCB3aGF0IHR5cGVzIHRoZXkgYXJlLlxuICBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyXG4gIFF1ZXJ5OiB0eXBlb2YgX19lc3JpLlF1ZXJ5XG4gIFNwYXRpYWxSZWZlcmVuY2U6IHR5cGVvZiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZVxuXG4gIHN0YXRlID0ge1xuICAgIGlkZWFTZWFyY2hJbnB1dDogJycsXG4gICAgamltdU1hcFZpZXc6IG51bGwsXG4gICAgZmVhdHVyZUxheWVyOiBudWxsLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGluaXRpYWxFeHRlbnQ6IG51bGxcbiAgfVxuXG4gIC8vIFVSTCBmaXhhIGRhIGNhbWFkYSBkZSBhbGVydGFzIGRlIGJhcnJlaXJhc1xuICByZWFkb25seSBGRUFUVVJFX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL0JhcnJlaXJhc19jbGFzc2lmaWNhZG8vRmVhdHVyZVNlcnZlcidcbiAgXG4gIC8vIFVSTCBkYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8gKEJhcnJlaXJhcylcbiAgcmVhZG9ubHkgR1BfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy90ZXN0ZW91dHB1dC9wcm9jZXNzYXJhbGVydGFfYmFycmVpcmFzL0dQU2VydmVyL3JlbGF0b3Jpb19hbmFsaXNlX2JhcnJlaXJhcydcbiAgXG4gIC8vIE5vbWUgZGEgdGFzayBlc3BlY8OtZmljYSBkZW50cm8gZGEgR1BcbiAgcmVhZG9ubHkgR1BfVEFTS19OQU1FID0gJ3JlbGF0b3Jpb19hbmFsaXNlX2JhcnJlaXJhcydcblxuICAvLyBGdW7Dp8OjbyBjaGFtYWRhIHF1YW5kbyBvIHZhbG9yIGRhIHBlc3F1aXNhIG11ZGFcbiAgaGFuZGxlSWRlYVNlYXJjaElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpZGVhU2VhcmNoSW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGF1dG9tYXRpY2FtZW50ZSBxdWFuZG8gbyBjb21wb25lbnRlIMOpIG1vbnRhZG8gb3UgbyBtYXBhIGVzdMOhIGRpc3BvbsOtdmVsXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmICF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiAhcHJldlN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAvLyBTYWx2YSBhIHZpc3VhbGl6YcOnw6NvIGluaWNpYWwgcXVhbmRvIG8gbWFwYSDDqSBkZXRlY3RhZG8gcGVsYSBwcmltZWlyYSB2ZXpcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcgJiYgIXRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RXh0ZW50ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudFxuICAgICAgICBpZiAoY3VycmVudEV4dGVudCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5pdGlhbEV4dGVudDogY3VycmVudEV4dGVudC5jbG9uZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5maW5kRXhpc3RpbmdGZWF0dXJlTGF5ZXIoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEVuY29udHJhIGEgY2FtYWRhIGrDoSBleGlzdGVudGUgbm8gbWFwYSAobsOjbyBhZGljaW9uYSBjYW1hZGEpXG4gIGZpbmRFeGlzdGluZ0ZlYXR1cmVMYXllciA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbWFwID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Py5tYXBcbiAgICAgIGlmICghbWFwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJvY3VyYSB1bWEgRmVhdHVyZUxheWVyIGrDoSBhZGljaW9uYWRhIGNvbSBhIG1lc21hIFVSTFxuICAgICAgY29uc3QgdGFyZ2V0VXJsID0gdGhpcy5GRUFUVVJFX1NFUlZJQ0VfVVJMXG4gICAgICBjb25zdCBhbGxMYXllcnM6IGFueVtdID0gKG1hcC5hbGxMYXllcnMgJiYgbWFwLmFsbExheWVycy50b0FycmF5KSA/IG1hcC5hbGxMYXllcnMudG9BcnJheSgpIDogW11cblxuICAgICAgY29uc3QgZm91bmQgPSBhbGxMYXllcnMuZmluZCgobHlyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gKGx5ciAmJiB0eXBlb2YgbHlyLnVybCA9PT0gJ3N0cmluZycpID8gbHlyLnVybCA6ICcnXG4gICAgICAgIHJldHVybiB1cmwgPT09IHRhcmdldFVybFxuICAgICAgfSlcblxuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NhbWFkYSBuw6NvIGVuY29udHJhZGEgbm8gbWFwYS4gVVJMIHByb2N1cmFkYTonLCB0YXJnZXRVcmwpXG4gICAgICAgIGFsZXJ0KCdBIGNhbWFkYSBkZSBiYXJyZWlyYXMgasOhIGRldmUgZXN0YXIgbm8gbWFwYSwgbWFzIG7Do28gZm9pIGVuY29udHJhZGEuIFZlcmlmaXF1ZSBzZSBlbGEgZXN0w6EgYWRpY2lvbmFkYSBlIHZpc8OtdmVsLicpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gU2FsdmEgcmVmZXLDqm5jaWEgZGEgY2FtYWRhIGV4aXN0ZW50ZSAobsOjbyBjcmlhIGUgbsOjbyBhZGljaW9uYSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmZWF0dXJlTGF5ZXI6IGZvdW5kLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGxvY2FsaXphciBjYW1hZGEgZXhpc3RlbnRlIG5vIG1hcGE6JywgZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZmlsdHJhciBlIGRhciB6b29tIG5vIHBvbMOtZ29ubyBiYXNlYWRvIG5hIHBlc3F1aXNhXG4gIGhhbmRsZUZpbHRlckFuZFpvb20gPSBhc3luYyAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIENhc29zIGRlIGVycm9cbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGNvbmZpZ3VyZSB1bSBtYXBhIG5vIHdpZGdldC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIpIHtcbiAgICAgIGFsZXJ0KCdBIGNhbWFkYSBhaW5kYSBuw6NvIGZvaSBjYXJyZWdhZGEuIEFndWFyZGUuLi4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCA9PT0gJycgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJykge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgZGlnaXRlIG8gY8OzZGlnbyBkbyBhbGVydGEgcGFyYSBwZXNxdWlzYXIgbmEgY29sdW5hIGNvZGVhbGVydGEuJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICAvLyBDYXJyZWdhIG9zIG3Ds2R1bG9zIG5lY2Vzc8Ohcmlvc1xuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXG4gICAgICAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJ1xuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcblxuICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnN0YXRlLmZlYXR1cmVMYXllclxuICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKClcbiAgICAgIFxuICAgICAgLy8gRXNjYXBhIGFzcGFzIHNpbXBsZXMgcGFyYSBldml0YXIgU1FMIGluamVjdGlvblxuICAgICAgY29uc3QgZXNjYXBlZFZhbHVlID0gc2VhcmNoVmFsdWUucmVwbGFjZSgvJy9nLCBcIicnXCIpXG5cbiAgICAgIC8vIFZlcmlmaWNhIHNlIGEgY2FtYWRhIGVzdMOhIGNhcnJlZ2FkYSBlIG9idMOpbSBpbmZvcm1hw6fDtWVzIGRvcyBjYW1wb3NcbiAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgZXN0YXIgY29tcGxldGFtZW50ZSBjYXJyZWdhZGFcbiAgICAgIGNvbnN0IGNoZWNrQW5kUXVlcnkgPSAoKSA9PiB7XG4gICAgICAgIC8vIExpc3RhIGRlIHBvc3PDrXZlaXMgbm9tZXMgZGUgY29sdW5hIChwcmlvcml6YSBjb2RlYWxlcnRhIHBhcmEgYmFycmVpcmFzKVxuICAgICAgICBjb25zdCBwb3NzaWJsZUZpZWxkTmFtZXMgPSBbXG4gICAgICAgICAgJ2NvZGVhbGVydGEnLCAnQ09ERUFMRVJUQScsICdDb2RlYWxlcnRhJyxcbiAgICAgICAgICAnY29kZV9hbGVydGEnLCAnQ09ERV9BTEVSVEEnLFxuICAgICAgICAgICdpZF9hbGVydGEnLCAnSURfQUxFUlRBJyxcbiAgICAgICAgICAnaWRlYScsICdJREVBJywgJ0lkZWEnLCAnSUQnLCAnaWQnLCAnSWQnXG4gICAgICAgIF1cbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9ICdjb2RlYWxlcnRhJyAvLyBQYWRyw6NvIHBhcmEgYmFycmVpcmFzXG4gICAgICAgIFxuICAgICAgICAvLyBUZW50YSBlbmNvbnRyYXIgbyBjYW1wbyBjb3JyZXRvXG4gICAgICAgIGlmIChsYXllci5maWVsZHMgJiYgbGF5ZXIuZmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmb3VuZEZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXG4gICAgICAgICAgICBwb3NzaWJsZUZpZWxkTmFtZXMuaW5jbHVkZXMoZmllbGQubmFtZSlcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKGZvdW5kRmllbGQpIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZSA9IGZvdW5kRmllbGQubmFtZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJhciwgdGVudGEgZmF6ZXIgdW1hIGJ1c2NhIGNhc2UtaW5zZW5zaXRpdmVcbiAgICAgICAgICAgIGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXG4gICAgICAgICAgICAgIGZpZWxkLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NvZGVhbGVydGEnIHx8IGZpZWxkLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lkZWEnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAoY2FzZUluc2Vuc2l0aXZlRmllbGQpIHtcbiAgICAgICAgICAgICAgZmllbGROYW1lID0gY2FzZUluc2Vuc2l0aXZlRmllbGQubmFtZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gTG9nIGRvcyBjYW1wb3MgZGlzcG9uw612ZWlzIHBhcmEgZGVidWdcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvcyBkaXNwb27DrXZlaXMgbmEgY2FtYWRhOicsIGxheWVyLmZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpKVxuICAgICAgICAgICAgICAvLyBUZW50YSB1c2FyIG8gcHJpbWVpcm8gY2FtcG8gcXVlIHBhcmVjZSBzZXIgdW0gSURcbiAgICAgICAgICAgICAgY29uc3QgaWRGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxuICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlU3RyaW5nJyB8fCBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZUludGVnZXInIHx8IGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlRG91YmxlJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGlmIChpZEZpZWxkKSB7XG4gICAgICAgICAgICAgICAgZmllbGROYW1lID0gaWRGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzYW5kbyBjYW1wbzogJHtmaWVsZE5hbWV9YClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyaWEgdW1hIHF1ZXJ5IHBhcmEgYnVzY2FyIG8gcG9sw61nb25vIHBlbGEgY29sdW5hXG4gICAgICAgIC8vIFVzYSBMSUtFIHBhcmEgYnVzY2EgbWFpcyBmbGV4w612ZWwgZSB0cmF0YSBjb21vIHN0cmluZ1xuICAgICAgICBjb25zdCBxdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcbiAgICAgICAgXG4gICAgICAgIC8vIFRlbnRhIGRpZmVyZW50ZXMgYWJvcmRhZ2VucyBkZSBxdWVyeVxuICAgICAgICAvLyAxLiBCdXNjYSBleGF0YSBjb21vIHN0cmluZ1xuICAgICAgICAvLyAyLiBCdXNjYSBjb20gTElLRSBwYXJhIHZhbG9yZXMgcGFyY2lhaXNcbiAgICAgICAgLy8gMy4gQnVzY2EgY29tbyBuw7ptZXJvIChzZSBvIHZhbG9yIGZvciBudW3DqXJpY28pXG4gICAgICAgIGNvbnN0IGhhc1NwZWNpYWxDaGFycyA9IHNlYXJjaFZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEgfHwgc2VhcmNoVmFsdWUuaW5kZXhPZignLycpICE9PSAtMVxuICAgICAgICBcbiAgICAgICAgLy8gUGFyYSB2YWxvcmVzIGNvbSBjYXJhY3RlcmVzIGVzcGVjaWFpcyAoY29tbyBcIjAwMy45LjQyNzA3NC8yMDI1XCIpLCB1c2EgYXBlbmFzIGNvbW8gc3RyaW5nXG4gICAgICAgIGlmIChoYXNTcGVjaWFsQ2hhcnMpIHtcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZSBmb3IgdW0gbsO6bWVybyBzaW1wbGVzLCB0ZW50YSBjb21vIG7Dum1lcm8gZSBjb21vIHN0cmluZ1xuICAgICAgICAgIGNvbnN0IGlzTnVtZXJpYyA9ICFpc05hTihwYXJzZUZsb2F0KHNlYXJjaFZhbHVlKSkgJiYgaXNGaW5pdGUocGFyc2VGbG9hdChzZWFyY2hWYWx1ZSkpXG4gICAgICAgICAgaWYgKGlzTnVtZXJpYykge1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJHtzZWFyY2hWYWx1ZX0gT1IgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG5cbiAgICAgICAgLy8gRXhlY3V0YSBhIHF1ZXJ5XG4gICAgICAgIGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91LCB0ZW50YSBjb20gTElLRVxuICAgICAgICAgICAgY29uc3QgbGlrZVF1ZXJ5ID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxuICAgICAgICAgICAgbGlrZVF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSBMSUtFICclJHtlc2NhcGVkVmFsdWV9JSdgXG4gICAgICAgICAgICBsaWtlUXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBsYXllci5xdWVyeUZlYXR1cmVzKGxpa2VRdWVyeSkudGhlbigobGlrZVJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxpa2VSZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGBOZW5odW0gcG9sw61nb25vIGVuY29udHJhZG8gY29tICR7ZmllbGROYW1lfSA9ICR7c2VhcmNoVmFsdWV9YClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gU2UgZW5jb250cm91IGNvbSBMSUtFLCB1c2EgbyBwcmltZWlybyByZXN1bHRhZG9cbiAgICAgICAgICAgICAgY29uc3QgZm91bmRHcmFwaGljID0gbGlrZVJlc3VsdHMuZmVhdHVyZXNbMF1cbiAgICAgICAgICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBmb3VuZEdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJBbmRab29tKGxheWVyLCBmb3VuZEdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlIGVuY29udHJvdSwgYXBsaWNhIGZpbHRybyBlIHpvb21cbiAgICAgICAgICBjb25zdCBmb3VuZEdyYXBoaWMgPSByZXN1bHRzLmZlYXR1cmVzWzBdXG4gICAgICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBmb3VuZEdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXG4gICAgICAgICAgdGhpcy5hcHBseUZpbHRlckFuZFpvb20obGF5ZXIsIGZvdW5kR3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBwZXNxdWlzYXIgZmVhdHVyZXM6JywgZXJyb3IpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRGV0YWxoZXMgZG8gZXJybzonLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgZGV0YWlsczogZXJyb3IuZGV0YWlscyxcbiAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6IHNlYXJjaFZhbHVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBUZW50YSBtb3N0cmFyIGluZm9ybWHDp8O1ZXMgbWFpcyDDunRlaXNcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gcGVzcXVpc2FyLiAnXG4gICAgICAgICAgaWYgKGxheWVyLmZpZWxkcyAmJiBsYXllci5maWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lcyA9IGxheWVyLmZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpLmpvaW4oJywgJylcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgXFxuXFxuQ2FtcG9zIGRpc3BvbsOtdmVpczogJHtmaWVsZE5hbWVzfWBcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBcXG5cXG5WZXJpZmlxdWUgc2UgYSBjb2x1bmEgXCIke2ZpZWxkTmFtZX1cIiBleGlzdGUgZSBzZSBvIHZhbG9yIFwiJHtzZWFyY2hWYWx1ZX1cIiBlc3TDoSBjb3JyZXRvLmBcbiAgICAgICAgICBcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFNlIGEgY2FtYWRhIGrDoSBlc3TDoSBjYXJyZWdhZGEsIGV4ZWN1dGEgZGlyZXRhbWVudGVcbiAgICAgIGlmIChsYXllci5sb2FkZWQpIHtcbiAgICAgICAgY2hlY2tBbmRRdWVyeSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyXG4gICAgICAgIGxheWVyLndoZW4oKCkgPT4ge1xuICAgICAgICAgIGNoZWNrQW5kUXVlcnkoKVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIGluZm9ybWHDp8O1ZXMgZGEgY2FtYWRhOicsIGVycm9yKVxuICAgICAgICAgIGFsZXJ0KCdFcnJvIGFvIGNhcnJlZ2FyIGluZm9ybWHDp8O1ZXMgZGEgY2FtYWRhLiBWZXJpZmlxdWUgc2UgYSBjYW1hZGEgZXN0w6EgYWNlc3PDrXZlbC4nKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFwbGljYXIgZmlsdHJvIGUgem9vbVxuICBhcHBseUZpbHRlckFuZFpvb20gPSAobGF5ZXIsIGdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpID0+IHtcbiAgICAvLyBPYnTDqW0gbyB2YWxvciByZWFsIGRvIGF0cmlidXRvIGRvIGdyYXBoaWNcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXG4gICAgXG4gICAgLy8gU2UgbyB2YWxvciBuw6NvIGZvaSBwYXNzYWRvLCB1c2EgbyBkbyBhdHJpYnV0b1xuICAgIGNvbnN0IHZhbHVlVG9GaWx0ZXIgPSBhY3R1YWxWYWx1ZSAhPT0gdW5kZWZpbmVkID8gYWN0dWFsVmFsdWUgOiBhdHRyaWJ1dGVWYWx1ZVxuICAgIFxuICAgIC8vIEVzY2FwYSBvIHZhbG9yIHBhcmEgU1FMICh0cmF0YSBzdHJpbmdzLCBuw7ptZXJvcyBlIG51bGwpXG4gICAgbGV0IGRlZmluaXRpb25FeHByZXNzaW9uXG4gICAgaWYgKHZhbHVlVG9GaWx0ZXIgPT09IG51bGwgfHwgdmFsdWVUb0ZpbHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gSVMgTlVMTGBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZVRvRmlsdGVyID09PSAnbnVtYmVyJykge1xuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9ID0gJHt2YWx1ZVRvRmlsdGVyfWBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gw4kgdW1hIHN0cmluZywgcHJlY2lzYSBlc2NhcGFyIGFzcGFzIHNpbXBsZXNcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZVRvRmlsdGVyKS5yZXBsYWNlKC8nL2csIFwiJydcIilcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhgQXBsaWNhbmRvIGZpbHRybzogJHtmaWVsZE5hbWV9ID0gJHt2YWx1ZVRvRmlsdGVyfWApXG4gICAgY29uc29sZS5sb2coYERlZmluaXRpb24gRXhwcmVzc2lvbjogJHtkZWZpbml0aW9uRXhwcmVzc2lvbn1gKVxuXG4gICAgLy8gQXBsaWNhIG8gZmlsdHJvIG5hIGNhbWFkYSB1c2FuZG8gZGVmaW5pdGlvbkV4cHJlc3Npb25cbiAgICAvLyBJc3NvIMOpIG8gbcOpdG9kbyBjb3JyZXRvIHBhcmEgZmlsdHJhciB1bWEgRmVhdHVyZUxheWVyIGUgb2N1bHRhciBvdXRyb3MgcG9sw61nb25vc1xuICAgIGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gZGVmaW5pdGlvbkV4cHJlc3Npb25cbiAgICBcbiAgICAvLyBGb3LDp2EgYSBhdHVhbGl6YcOnw6NvIGltZWRpYXRhIGRhIGNhbWFkYSBwYXJhIGFwbGljYXIgbyBmaWx0cm9cbiAgICBsYXllci5yZWZyZXNoKClcbiAgICBcbiAgICBjb25zb2xlLmxvZygnRmlsdHJvIGFwbGljYWRvLiBBIGNhbWFkYSBkZXZlIG1vc3RyYXIgQVBFTkFTIG8gcG9sw61nb25vIHNlbGVjaW9uYWRvJylcbiAgICBjb25zb2xlLmxvZygnRGVmaW5pdGlvbiBFeHByZXNzaW9uOicsIGRlZmluaXRpb25FeHByZXNzaW9uKVxuICAgIFxuICAgIC8vIEFndWFyZGEgdW0gcG91Y28gcGFyYSBnYXJhbnRpciBxdWUgbyBmaWx0cm8gc2VqYSBwcm9jZXNzYWRvXG4gICAgLy8gQWd1YXJkYSBxdWUgYSBjYW1hZGEgZXN0ZWphIGNvbXBsZXRhbWVudGUgY2FycmVnYWRhIGFudGVzIGRlIGFwbGljYXIgbyBmaWx0cm9cbiAgICBpZiAobGF5ZXIubG9hZGVkKSB7XG4gICAgICAvLyBBIGNhbWFkYSBqw6EgZXN0w6EgY2FycmVnYWRhLCBhcGxpY2EgbyBmaWx0cm8gZGlyZXRhbWVudGVcbiAgICAgIC8vIEFndWFyZGEgdW0gcG91Y28gcGFyYSBnYXJhbnRpciBxdWUgbyBmaWx0cm8gc2VqYSBhcGxpY2Fkb1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gZmlsdHJvIGZvaSBhcGxpY2Fkb1xuICAgICAgICBpZiAobGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPT09IGRlZmluaXRpb25FeHByZXNzaW9uKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZpbHRybyBjb25maXJtYWRvIG5hIGNhbWFkYScpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHBseVpvb21BZnRlckZpbHRlcihsYXllciwgZ3JhcGhpYylcbiAgICAgIH0sIDMwMClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBjYXJyZWdhciBwcmltZWlyb1xuICAgICAgbGF5ZXIud2hlbigoKSA9PiB7XG4gICAgICAgIC8vIEFwbGljYSBvIGZpbHRybyBub3ZhbWVudGUgYXDDs3MgY2FycmVnYXIgKGdhcmFudGlhKVxuICAgICAgICBsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGRlZmluaXRpb25FeHByZXNzaW9uXG4gICAgICAgIGxheWVyLnJlZnJlc2goKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxuICAgICAgICB9LCAzMDApXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBhZ3VhcmRhciBjYW1hZGE6JywgZXJyb3IpXG4gICAgICAgIC8vIE1lc21vIGFzc2ltIHRlbnRhIGFwbGljYXIgbyB6b29tXG4gICAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgYXBsaWNhciB6b29tIGFww7NzIG8gZmlsdHJvXG4gIGFwcGx5Wm9vbUFmdGVyRmlsdGVyID0gKGxheWVyLCBncmFwaGljKSA9PiB7XG4gICAgLy8gQWd1YXJkYSB1bSBwb3VjbyBwYXJhIGdhcmFudGlyIHF1ZSBvIGZpbHRybyBzZWphIHByb2Nlc3NhZG8gcGVsYSBjYW1hZGFcbiAgICAvLyBPIGRlZmluaXRpb25FeHByZXNzaW9uIHByZWNpc2EgZGUgdGVtcG8gcGFyYSBzZXIgcHJvY2Vzc2Fkb1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gRMOhIHpvb20gbm8gcG9sw61nb25vIGVuY29udHJhZG8gY29tIHBhZGRpbmcgcGFyYSBuw6NvIGNvcnRhclxuICAgICAgaWYgKGdyYXBoaWMuZ2VvbWV0cnkgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcbiAgICAgICAgLy8gVXNhIGdvVG8gY29tIHRhcmdldCBlIHBhZGRpbmcgZW0gcGl4ZWxzIHBhcmEgY29udHJvbGFyIG1lbGhvciBvIHpvb21cbiAgICAgICAgLy8gUGFkZGluZyBkZSA1MCBwaXhlbHMgZW0gY2FkYSBsYWRvIHBhcmEgbsOjbyBjb3J0YXIgbyBwb2zDrWdvbm9cbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8oe1xuICAgICAgICAgIHRhcmdldDogZ3JhcGhpYy5nZW9tZXRyeSxcbiAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICBsZWZ0OiA1MCxcbiAgICAgICAgICAgIHJpZ2h0OiA1MCxcbiAgICAgICAgICAgIHRvcDogNTAsXG4gICAgICAgICAgICBib3R0b206IDUwXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnWm9vbSBhcGxpY2FkbyBubyBwb2zDrWdvbm8gZmlsdHJhZG8gY29tIHBhZGRpbmcnKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGRhciB6b29tOicsIGVycm9yKVxuICAgICAgICAgIC8vIEZhbGxiYWNrOiB0ZW50YSB6b29tIGNvbSBleHRlbnQgY2FsY3VsYWRvIG1hbnVhbG1lbnRlXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVudCA9IGdyYXBoaWMuZ2VvbWV0cnkuZXh0ZW50XG4gICAgICAgICAgICAvLyBBZGljaW9uYSAxMCUgZGUgcGFkZGluZyBjYWxjdWxhZG8gYSBwYXJ0aXIgZG8gdGFtYW5obyBkbyBleHRlbnRcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdGYWN0b3IgPSAwLjFcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZXh0ZW50LndpZHRoXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBleHRlbnQuaGVpZ2h0XG4gICAgICAgICAgICBjb25zdCBwYWRkZWRFeHRlbnQgPSBleHRlbnQuZXhwYW5kKHdpZHRoICogcGFkZGluZ0ZhY3RvciwgaGVpZ2h0ICogcGFkZGluZ0ZhY3RvcilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8ocGFkZGVkRXh0ZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWm9vbSBhcGxpY2FkbyB1c2FuZG8gZXh0ZW50IGNvbSBwYWRkaW5nIGNhbGN1bGFkbycpXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSkuY2F0Y2goKGZhbGxiYWNrRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBubyB6b29tIGRlIGZhbGxiYWNrOicsIGZhbGxiYWNrRXJyb3IpXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGNhdGNoIChjYWxjRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FsY3VsYXIgZXh0ZW50OicsIGNhbGNFcnJvcilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgfVxuICAgIH0sIDUwMClcbiAgfVxuXG4gIC8vIEZ1bsOnw6NvIHBhcmEgbGltcGFyIG8gZmlsdHJvXG4gIGhhbmRsZUNsZWFyRmlsdGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllcikge1xuICAgICAgLy8gUmVtb3ZlIG8gZmlsdHJvIGRlZmluaW5kbyBkZWZpbml0aW9uRXhwcmVzc2lvbiBjb21vIHZhemlvIG91IG51bGxcbiAgICAgIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gbnVsbFxuICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIucmVmcmVzaCgpXG4gICAgICBjb25zb2xlLmxvZygnRmlsdHJvIHJlbW92aWRvIC0gdG9kb3Mgb3MgYWxlcnRhcyBkZXZlbSBhcGFyZWNlciBub3ZhbWVudGUnKVxuICAgICAgXG4gICAgICAvLyBBZ3VhcmRhIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIG8gZmlsdHJvIHNlamEgcmVtb3ZpZG9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBWZXJpZmljYSBzZSBvIGZpbHRybyBmb2kgcmVtb3ZpZG9cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiB8fCB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9PT0gJycpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRmlsdHJvIGNvbmZpcm1hZG8gY29tbyByZW1vdmlkbycpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlc3RhdXJhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBkbyBtYXBhXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldykge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQpIHtcbiAgICAgICAgICAgIC8vIFJlc3RhdXJhIGEgZXh0ZW5zw6NvIGluaWNpYWwgc2FsdmFcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Zpc3VhbGl6YcOnw6NvIGluaWNpYWwgcmVzdGF1cmFkYScpXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyByZXN0YXVyYXIgdmlzdWFsaXphw6fDo28gaW5pY2lhbDonLCBlcnJvcilcbiAgICAgICAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBmYXplciB6b29tIHBhcmEgYSBjYW1hZGEgY29tcGxldGFcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50LCB7XG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2UgbsOjbyB0aXZlciBleHRlbnPDo28gaW5pY2lhbCBzYWx2YSwgdGVudGEgZmF6ZXIgem9vbSBwYXJhIGEgY2FtYWRhIGNvbXBsZXRhXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCkge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50LCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWm9vbSBwYXJhIGNhbWFkYSBjb21wbGV0YSBhcGxpY2FkbycpXG4gICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZmF6ZXIgem9vbSBwYXJhIGNhbWFkYSBjb21wbGV0YTonLCBlcnJvcilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMClcbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlkZWFTZWFyY2hJbnB1dDogJydcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gRnVuw6fDo28gcGFyYSBnZXJhciByZWxhdMOzcmlvIHVzYW5kbyBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50b1xuICBoYW5kbGVHZW5lcmF0ZVJlcG9ydCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBEZWNsYXJhIHZhcmnDoXZlaXMgbm8gZXNjb3BvIGRhIGZ1bsOnw6NvIHBhcmEgcXVlIGVzdGVqYW0gYWNlc3PDrXZlaXMgbm8gY2F0Y2hcbiAgICBsZXQgYWxlcnRDb2RlID0gJydcbiAgICBsZXQgcGFyYW1OYW1lID0gbnVsbFxuICAgIGxldCBleGVjdXRlVXJsID0gJydcbiAgICBsZXQgdG9rZW4gPSBudWxsXG4gICAgXG4gICAgLy8gVmFsaWRhw6fDtWVzIGluaWNpYWlzXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnKSB7XG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBkaWdpdGUgbyBjw7NkaWdvIGRvIGFsZXJ0YSBwYXJhIGdlcmFyIG8gcmVsYXTDs3Jpby4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYWxlcnRDb2RlID0gdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpXG4gICAgXG4gICAgLy8gUmVtb3ZlIGVzcGHDp29zIGV4dHJhcyBlIGNhcmFjdGVyZXMgaW52aXPDrXZlaXNcbiAgICBhbGVydENvZGUgPSBhbGVydENvZGUucmVwbGFjZSgvXFxzKy9nLCAnJykudHJpbSgpXG4gICAgXG4gICAgLy8gVmFsaWRhw6fDo28gc2ltcGxlcyBkZSBjb21wcmltZW50byBtw61uaW1vXG4gICAgaWYgKGFsZXJ0Q29kZS5sZW5ndGggPCAzKSB7XG4gICAgICBhbGVydCgnTyBjw7NkaWdvIGRvIGFsZXJ0YSBwYXJlY2UgZXN0YXIgbXVpdG8gY3VydG8uIFZlcmlmaXF1ZSBzZSBkaWdpdG91IGNvcnJldGFtZW50ZS4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKCc9PT0gVkFMSURBw4fDg08gRE8gVkFMT1IgKEPDk0RJR08gRE8gQUxFUlRBKSA9PT0nKVxuICAgIGNvbnNvbGUubG9nKCdWYWxvciBvcmlnaW5hbDonLCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dClcbiAgICBjb25zb2xlLmxvZygnVmFsb3IgcHJvY2Vzc2FkbzonLCBhbGVydENvZGUpXG4gICAgY29uc29sZS5sb2coJ0NvbXByaW1lbnRvOicsIGFsZXJ0Q29kZS5sZW5ndGgpXG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcblxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnSW5pY2lhbmRvIGdlcmHDp8OjbyBkZSByZWxhdMOzcmlvIHBhcmEgY8OzZGlnbyBkZSBhbGVydGE6JywgYWxlcnRDb2RlKVxuICAgICAgXG4gICAgICAvLyBDYXJyZWdhIElkZW50aXR5TWFuYWdlciBwYXJhIG9idGVyIHRva2VuIGRlIGF1dGVudGljYcOnw6NvXG4gICAgICBjb25zb2xlLmxvZygnQ2FycmVnYW5kbyBJZGVudGl0eU1hbmFnZXIgcGFyYSBhdXRlbnRpY2HDp8Ojby4uLicpXG4gICAgICBjb25zdCBpZGVudGl0eU1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICAgJ2VzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyJ1xuICAgICAgXSlcbiAgICAgIGNvbnN0IFtJZGVudGl0eU1hbmFnZXJdID0gaWRlbnRpdHlNb2R1bGVzXG4gICAgICBcbiAgICAgIC8vIE9idMOpbSBvIHRva2VuIHBhcmEgYSBVUkwgZG8gc2VydmnDp28gKGrDoSBkZWNsYXJhZG8gbm8gaW7DrWNpbyBkYSBmdW7Dp8OjbylcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcbiAgICAgICAgaWYgKGNyZWRlbnRpYWwgJiYgY3JlZGVudGlhbC50b2tlbikge1xuICAgICAgICAgIHRva2VuID0gY3JlZGVudGlhbC50b2tlblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBlbmNvbnRyYWRvIHZpYSBJZGVudGl0eU1hbmFnZXInKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRlbnRhIGdlcmFyIHRva2VuIGF1dG9tYXRpY2FtZW50ZVxuICAgICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBJZGVudGl0eU1hbmFnZXIuZmluZFNlcnZlckluZm8odGhpcy5HUF9TRVJWSUNFX1VSTClcbiAgICAgICAgICBpZiAoc2VydmVySW5mbykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ09idGVuZG8gdG9rZW4gYXV0b21hdGljYW1lbnRlLi4uJylcbiAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcbiAgICAgICAgICAgIGlmICh1cGRhdGVkQ3JlZGVudGlhbCAmJiB1cGRhdGVkQ3JlZGVudGlhbC50b2tlbikge1xuICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBvYnRpZG8gYXV0b21hdGljYW1lbnRlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHRva2VuRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIG9idGVyIHRva2VuLCB0ZW50YW5kbyBzZW0gYXV0ZW50aWNhw6fDo286JywgdG9rZW5FcnJvcilcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhZGljaW9uYXIgdG9rZW4gw6BzIFVSTHNcbiAgICAgIGNvbnN0IGFkZFRva2VuVG9VcmwgPSAodXJsKSA9PiB7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdXJsXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybClcbiAgICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgICByZXR1cm4gdXJsT2JqLnRvU3RyaW5nKClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIFNlIGEgVVJMIG7Do28gZm9yIGFic29sdXRhLCB0cmF0YSBjb21vIHN0cmluZ1xuICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nXG4gICAgICAgICAgcmV0dXJuIGAke3VybH0ke3NlcGFyYXRvcn10b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFByaW1laXJvLCB2YW1vcyBvYnRlciBpbmZvcm1hw6fDtWVzIHNvYnJlIGEgdGFzayBlc3BlY8OtZmljYSBwYXJhIGRlc2NvYnJpciBvcyBwYXLDom1ldHJvc1xuICAgICAgY29uc29sZS5sb2coJ09idGVuZG8gaW5mb3JtYcOnw7VlcyBkYSB0YXNrIGVzcGVjw61maWNhLi4uJylcbiAgICAgIC8vIEEgVVJMIGJhc2UgasOhIGFwb250YSBwYXJhIGEgdGFzayBlc3BlY8OtZmljYSwgZW50w6NvIG7Do28gcHJlY2lzYSBhZGljaW9uYXIgbyBub21lIGRhIHRhc2sgbm92YW1lbnRlXG4gICAgICAvLyBjb25zdCB0YXNrTmFtZUVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy5HUF9UQVNLX05BTUUpXG4gICAgICBjb25zdCBpbmZvVXJsID0gYWRkVG9rZW5Ub1VybChgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfT9mPWpzb25gKVxuICAgICAgY29uc29sZS5sb2coJ1VSTCBkZSBpbmZvcm1hw6fDtWVzIGRhIHRhc2s6JywgaW5mb1VybClcbiAgICAgIFxuICAgICAgLy8gVGVudGEgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkYSB0YXNrIGVzcGVjw61maWNhIHByaW1laXJvXG4gICAgICBsZXQgZ3BJbmZvXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0YXNrSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5mb1VybClcbiAgICAgICAgaWYgKHRhc2tJbmZvUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBncEluZm8gPSBhd2FpdCB0YXNrSW5mb1Jlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2Egb2J0aWRhcyBjb20gc3VjZXNzbycpXG4gICAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgY29tcGxldGFzIGRhIHRhc2s6JywgSlNPTi5zdHJpbmdpZnkoZ3BJbmZvLCBudWxsLCAyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZSBmYWxoYXIsIHRlbnRhIGRhIEdQIGdlcmFsXG4gICAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkYSB0YXNrLCB0ZW50YW5kbyBkYSBHUCBnZXJhbC4uLicpXG4gICAgICAgICAgY29uc3QgZ3BJbmZvVXJsID0gYWRkVG9rZW5Ub1VybChgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfT9mPWpzb25gKVxuICAgICAgICAgIGNvbnN0IGdwSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ3BJbmZvVXJsKVxuICAgICAgICAgIFxuICAgICAgICAgIGlmICghZ3BJbmZvUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzOiAke3Rhc2tJbmZvUmVzcG9uc2Uuc3RhdHVzfSAke3Rhc2tJbmZvUmVzcG9uc2Uuc3RhdHVzVGV4dH1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBncEluZm8gPSBhd2FpdCBncEluZm9SZXNwb25zZS5qc29uKClcbiAgICAgICAgICBjb25zb2xlLmxvZygnVXNhbmRvIGluZm9ybWHDp8O1ZXMgZGEgR1AgZ2VyYWwnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSBHUDonLCBKU09OLnN0cmluZ2lmeShncEluZm8sIG51bGwsIDIpKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChpbmZvRXJyb3IpIHtcbiAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBkYSBHUCBnZXJhbFxuICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gYW8gb2J0ZXIgaW5mb3JtYcOnw7VlcyBkYSB0YXNrLCB0ZW50YW5kbyBkYSBHUCBnZXJhbC4uLicsIGluZm9FcnJvcilcbiAgICAgICAgY29uc3QgZ3BJbmZvVXJsID0gYWRkVG9rZW5Ub1VybChgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfT9mPWpzb25gKVxuICAgICAgICBjb25zdCBncEluZm9SZXNwb25zZSA9IGF3YWl0IGZldGNoKGdwSW5mb1VybClcbiAgICAgICAgZ3BJbmZvID0gYXdhaXQgZ3BJbmZvUmVzcG9uc2UuanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gaW5mb3JtYcOnw7VlcyBkYSBHUCBnZXJhbCAoZmFsbGJhY2spJylcbiAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgY29tcGxldGFzIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIERlc2NvYnJlIHF1YWwgw6kgbyBwYXLDom1ldHJvIGRlIGVudHJhZGEgZGEgR1BcbiAgICAgIC8vIElNUE9SVEFOVEU6IERldmVtb3MgdXNhciBleGF0YW1lbnRlIG8gbm9tZSBkbyBwYXLDom1ldHJvIHF1ZSBhIEdQIGVzcGVyYVxuICAgICAgLy8gTyB3aWRnZXQgcmVjZWJlIG8gdmFsb3IgZGEgY29sdW5hIFwiY29kZWFsZXJ0YVwiLCBtYXMgZW52aWEgY29tIG8gbm9tZSBxdWUgYSBHUCBlc3BlcmFcbiAgICAgIGxldCBwYXJhbU5hbWUgPSBudWxsXG4gICAgICBsZXQgcGFyYW1JbmZvID0gbnVsbFxuICAgICAgXG4gICAgICBpZiAoZ3BJbmZvLnBhcmFtZXRlcnMgJiYgQXJyYXkuaXNBcnJheShncEluZm8ucGFyYW1ldGVycykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPUyBESVNQT07DjVZFSVMgTkEgR1AgPT09JylcbiAgICAgICAgY29uc3QgYWxsUGFyYW1zID0gZ3BJbmZvLnBhcmFtZXRlcnMubWFwKHAgPT4gKHtcbiAgICAgICAgICBuYW1lOiBwLm5hbWUsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHAuZGlzcGxheU5hbWUgfHwgcC5uYW1lLFxuICAgICAgICAgIGRhdGFUeXBlOiBwLmRhdGFUeXBlLFxuICAgICAgICAgIGRpcmVjdGlvbjogcC5kaXJlY3Rpb24sXG4gICAgICAgICAgcGFyYW1ldGVyVHlwZTogcC5wYXJhbWV0ZXJUeXBlLFxuICAgICAgICAgIHJlcXVpcmVkOiBwLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHAucmVxdWlyZWQgPT09IHRydWVcbiAgICAgICAgfSkpXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2RvcyBvcyBwYXLDom1ldHJvczonLCBKU09OLnN0cmluZ2lmeShhbGxQYXJhbXMsIG51bGwsIDIpKVxuICAgICAgICBcbiAgICAgICAgLy8gUHJvY3VyYSBwZWxvIHByaW1laXJvIHBhcsOibWV0cm8gZGUgZW50cmFkYSAoaW5wdXQpXG4gICAgICAgIGNvbnN0IGlucHV0UGFyYW1zID0gZ3BJbmZvLnBhcmFtZXRlcnMuZmlsdGVyKHAgPT4gXG4gICAgICAgICAgKHAuZGlyZWN0aW9uID09PSAnZXNyaUdQUGFyYW1ldGVyRGlyZWN0aW9uSW5wdXQnIHx8IHAuZGlyZWN0aW9uID09PSAnR1BQYXJhbWV0ZXJEaXJlY3Rpb25JbnB1dCcpICYmXG4gICAgICAgICAgcC5uYW1lXG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvcyBkZSBlbnRyYWRhIGVuY29udHJhZG9zOicsIGlucHV0UGFyYW1zLm1hcChwID0+ICh7XG4gICAgICAgICAgbmFtZTogcC5uYW1lLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBwLmRpc3BsYXlOYW1lIHx8IHAubmFtZSxcbiAgICAgICAgICBkYXRhVHlwZTogcC5kYXRhVHlwZSxcbiAgICAgICAgICByZXF1aXJlZDogcC5wYXJhbWV0ZXJUeXBlID09PSAnZXNyaUdQUGFyYW1ldGVyVHlwZVJlcXVpcmVkJyB8fCBwLnJlcXVpcmVkID09PSB0cnVlXG4gICAgICAgIH0pKSlcbiAgICAgICAgXG4gICAgICAgIGlmIChpbnB1dFBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gVXNhIG8gcHJpbWVpcm8gcGFyw6JtZXRybyBkZSBlbnRyYWRhIChxdWUgw6kgbyBxdWUgYSBHUCBlc3BlcmEpXG4gICAgICAgICAgcGFyYW1JbmZvID0gaW5wdXRQYXJhbXNbMF1cbiAgICAgICAgICBwYXJhbU5hbWUgPSBwYXJhbUluZm8ubmFtZSAvLyBVc2EgZXhhdGFtZW50ZSBvIG5vbWUgcXVlIGEgR1AgZXNwZXJhIChwb2RlIHRlciBjYXJhY3RlcmVzIGVzcGVjaWFpcylcbiAgICAgICAgICBjb25zb2xlLmxvZygnPT09IFBBUsOCTUVUUk8gU0VMRUNJT05BRE8gPT09JylcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm9tZSB0w6ljbmljbyBkbyBwYXLDom1ldHJvIChzZXLDoSB1c2FkbyBubyByZXF1ZXN0KTonLCBwYXJhbU5hbWUpXG4gICAgICAgICAgY29uc29sZS5sb2coJ05vbWUgZGUgZXhpYmnDp8OjbyAobGFiZWwgbmEgaW50ZXJmYWNlKTonLCBwYXJhbUluZm8uZGlzcGxheU5hbWUgfHwgcGFyYW1JbmZvLm5hbWUpXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RldGFsaGVzIGNvbXBsZXRvczonLCB7XG4gICAgICAgICAgICBuYW1lOiBwYXJhbUluZm8ubmFtZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwYXJhbUluZm8uZGlzcGxheU5hbWUgfHwgcGFyYW1JbmZvLm5hbWUsXG4gICAgICAgICAgICBkYXRhVHlwZTogcGFyYW1JbmZvLmRhdGFUeXBlLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBwYXJhbUluZm8uZGlyZWN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHBhcmFtSW5mby5wYXJhbWV0ZXJUeXBlID09PSAnZXNyaUdQUGFyYW1ldGVyVHlwZVJlcXVpcmVkJyB8fCBwYXJhbUluZm8ucmVxdWlyZWQgPT09IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05lbmh1bSBwYXLDom1ldHJvIGRlIGVudHJhZGEgZW5jb250cmFkbyBuYSBHUCEnKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGlkZW50aWZpY2FyIG8gcGFyw6JtZXRybyBkZSBlbnRyYWRhIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50by4nKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgcGFyw6JtZXRyb3MgZGEgR1AhJylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkb3MgcGFyw6JtZXRyb3MgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvLicpXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENvbmZpcm1hIHF1YWwgcGFyw6JtZXRybyBzZXLDoSB1c2FkbyAoZGV2ZSBzZXIgZXhhdGFtZW50ZSBvIHF1ZSBhIEdQIGVzcGVyYSlcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRSTyBQQVJBIEVOVklBUiDDgCBHUCA9PT0nKVxuICAgICAgY29uc29sZS5sb2coJ05vbWUgZG8gcGFyw6JtZXRybyAoZXhhdGFtZW50ZSBjb21vIGEgR1AgZXNwZXJhKTonLCBwYXJhbU5hbWUpXG4gICAgICBjb25zb2xlLmxvZygnVmFsb3IgcXVlIHNlcsOhIGVudmlhZG8gKGRhIGNvbHVuYSBjb2RlYWxlcnRhIGRvIHdpZGdldCk6JywgYWxlcnRDb2RlKVxuICAgICAgY29uc29sZS5sb2coJ0RldGFsaGVzIGNvbXBsZXRvcyBkbyBwYXLDom1ldHJvOicsIHBhcmFtSW5mbylcbiAgICAgIFxuICAgICAgLy8gVmVyaWZpY2EgbyB0aXBvIGRvIHBhcsOibWV0cm8gcGFyYSBmb3JtYXRhciBjb3JyZXRhbWVudGVcbiAgICAgIGxldCBwYXJhbVZhbHVlID0gYWxlcnRDb2RlXG4gICAgICBpZiAocGFyYW1JbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaXBvIGRlIGRhZG8gZG8gcGFyw6JtZXRybzonLCBwYXJhbUluZm8uZGF0YVR5cGUpXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaXBvIGRlIHBhcsOibWV0cm86JywgcGFyYW1JbmZvLnBhcmFtZXRlclR5cGUpXG4gICAgICAgIFxuICAgICAgICAvLyBTZSBvIHBhcsOibWV0cm8gZm9yIGRvIHRpcG8gR1BTdHJpbmcgb3Ugc2ltaWxhciwgZW52aWEgY29tbyBzdHJpbmdcbiAgICAgICAgLy8gU2UgZm9yIFVSTCBvdSBvdXRybyB0aXBvIGNvbXBsZXhvLCBwb2RlIHByZWNpc2FyIGRlIGZvcm1hdG8gZGlmZXJlbnRlXG4gICAgICAgIGlmIChwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUFN0cmluZycgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZVN0cmluZycpIHtcbiAgICAgICAgICBwYXJhbVZhbHVlID0gU3RyaW5nKGFsZXJ0Q29kZSlcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUERvdWJsZScgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZURvdWJsZScgfHwgXG4gICAgICAgICAgICAgICAgICAgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnR1BMb25nJyB8fCBwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdlc3JpR1BUeXBlTG9uZycpIHtcbiAgICAgICAgICAvLyBTZSBmb3IgbnVtw6lyaWNvLCB0ZW50YSBjb252ZXJ0ZXJcbiAgICAgICAgICBjb25zdCBudW1WYWx1ZSA9IHBhcnNlRmxvYXQoYWxlcnRDb2RlKVxuICAgICAgICAgIGlmICghaXNOYU4obnVtVmFsdWUpKSB7XG4gICAgICAgICAgICBwYXJhbVZhbHVlID0gbnVtVmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gUHJlcGFyYSBvcyBwYXLDom1ldHJvcyBwYXJhIGEgZXhlY3XDp8Ojb1xuICAgICAgLy8gSU1QT1JUQU5URTogZj1qc29uIHZhaSBuYSBVUkwsIG7Do28gbm8gYm9keVxuICAgICAgLy8gQXBlbmFzIG9zIHBhcsOibWV0cm9zIGRhIEdQIHbDo28gbm8gYm9keVxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBbcGFyYW1OYW1lXTogcGFyYW1WYWx1ZVxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZygnPT09IFBBUsOCTUVUUk9TIFBBUkEgRU5WSUFSID09PScpXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgcHJlcGFyYWRvcyAocGFyYSBvIGJvZHkpOicsIHBhcmFtcylcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBkbyBwYXLDom1ldHJvOicsIHBhcmFtVmFsdWUsICdUaXBvOicsIHR5cGVvZiBwYXJhbVZhbHVlKVxuICAgICAgY29uc29sZS5sb2coJ05vbWUgZG8gcGFyw6JtZXRybyAoZXhhdG8pOicsIHBhcmFtTmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKCdOb21lIGRvIHBhcsOibWV0cm8gKEpTT04pOicsIEpTT04uc3RyaW5naWZ5KHBhcmFtTmFtZSkpXG4gICAgICBcbiAgICAgIC8vIEZvcm1hdGEgb3MgcGFyw6JtZXRyb3MgY29tbyBmb3JtLXVybGVuY29kZWRcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gICAgICBcbiAgICAgIC8vIEFkaWNpb25hIG9zIHBhcsOibWV0cm9zIChleGNldG8gZj1qc29uIHF1ZSB2YWkgbmEgVVJMKVxuICAgICAgLy8gSU1QT1JUQU5URTogVXNhIG8gbm9tZSBleGF0byBkbyBwYXLDom1ldHJvIGNvbW8gZXN0w6EgbmEgR1AgKHBvZGUgdGVyIGNhcmFjdGVyZXMgZXNwZWNpYWlzKVxuICAgICAgY29uc29sZS5sb2coJz09PSBQUkVQQVJBTkRPIEZPUk0gREFUQSA9PT0nKVxuICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkgIT09ICdmJykge1xuICAgICAgICAgIGNvbnN0IHBhcmFtS2V5ID0ga2V5IC8vIFVzYSBleGF0YW1lbnRlIG8gbm9tZSBxdWUgdmVpbyBkYSBHUCAoZXg6IFwiTsKwIElERUFcIiwgXCJ2YWxvcl9hbGVydGFcIiwgZXRjLilcbiAgICAgICAgICBjb25zdCBwYXJhbVZhbCA9IFN0cmluZyhwYXJhbXNba2V5XSlcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocGFyYW1LZXksIHBhcmFtVmFsKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGBQYXLDom1ldHJvIGFkaWNpb25hZG86IG5vbWU9XCIke3BhcmFtS2V5fVwiIHZhbG9yPVwiJHtwYXJhbVZhbH1cImApXG4gICAgICAgICAgY29uc29sZS5sb2coYCAgLSBOb21lIChKU09OKTogJHtKU09OLnN0cmluZ2lmeShwYXJhbUtleSl9YClcbiAgICAgICAgICBjb25zb2xlLmxvZyhgICAtIE5vbWUgKGJ5dGVzKTogJHtBcnJheS5mcm9tKHBhcmFtS2V5KS5tYXAoYyA9PiBjLmNoYXJDb2RlQXQoMCkpLmpvaW4oJywnKX1gKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgIC0gVmFsb3IgKEpTT04pOiAke0pTT04uc3RyaW5naWZ5KHBhcmFtVmFsKX1gKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgXG4gICAgICBjb25zdCBmb3JtRGF0YVN0cmluZyA9IGZvcm1EYXRhLnRvU3RyaW5nKClcbiAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBjb21wbGV0byAoc3RyaW5nKTonLCBmb3JtRGF0YVN0cmluZylcbiAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBjb21wbGV0byAoVVJMIGRlY29kZWQpOicsIGRlY29kZVVSSUNvbXBvbmVudChmb3JtRGF0YVN0cmluZykpXG4gICAgICBcbiAgICAgIC8vIEFkaWNpb25hIHRva2VuIGFvIGJvZHlcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBhZGljaW9uYWRvIGFvIGJvZHknKVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGZhemVyIGEgcmVxdWlzacOnw6NvXG4gICAgICBjb25zdCBtYWtlRXhlY3V0ZVJlcXVlc3QgPSBhc3luYyAodXJsKSA9PiB7XG4gICAgICAgIC8vIEFkaWNpb25hIHRva2VuIG5hIFVSTCB0YW1iw6ltIChhbGd1bnMgc2Vydmlkb3JlcyBBcmNHSVMgZXhpZ2VtIGlzc28pXG4gICAgICAgIGxldCBmaW5hbFVybCA9IHVybFxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBjb25zdCB1cmxXaXRoVG9rZW4gPSBuZXcgVVJMKHVybClcbiAgICAgICAgICB1cmxXaXRoVG9rZW4uc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgICB1cmxXaXRoVG9rZW4uc2VhcmNoUGFyYW1zLnNldCgnZicsICdqc29uJylcbiAgICAgICAgICBmaW5hbFVybCA9IHVybFdpdGhUb2tlbi50b1N0cmluZygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2UgbsOjbyB0aXZlciB0b2tlbiwgYWRpY2lvbmEgYXBlbmFzIGY9anNvblxuICAgICAgICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsKVxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCdmJywgJ2pzb24nKVxuICAgICAgICAgIGZpbmFsVXJsID0gdXJsT2JqLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIFVSTDonLCBmaW5hbFVybClcbiAgICAgICAgY29uc29sZS5sb2coJ0JvZHkgKGZvcm1EYXRhKTonLCBmb3JtRGF0YS50b1N0cmluZygpKVxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gcHJlc2VudGU6JywgISF0b2tlbilcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIGVudmlhZG9zOicsIE9iamVjdC5rZXlzKHBhcmFtcykpXG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbmFsVXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFZlcmlmaWNhIHNlIGEgdGFzayDDqSBhc3PDrW5jcm9uYSBwYXJhIGRlY2lkaXIgcXVhbCBlbmRwb2ludCB1c2FyXG4gICAgICBjb25zdCBpc0FzeW5jID0gZ3BJbmZvLmV4ZWN1dGlvblR5cGUgPT09ICdlc3JpRXhlY3V0aW9uVHlwZUFzeW5jaHJvbm91cydcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gVEVOVEFORE8gRVhFQ1VUQVIgR1AgPT09JylcbiAgICAgIGNvbnNvbGUubG9nKCdUaXBvIGRlIGV4ZWN1w6fDo286JywgZ3BJbmZvLmV4ZWN1dGlvblR5cGUpXG4gICAgICBjb25zb2xlLmxvZygnw4kgYXNzw61uY3JvbmE/JywgaXNBc3luYylcbiAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBwcmltZWlybyBjb20gdGFzayBlc3BlY8OtZmljYTonLCB0aGlzLkdQX1RBU0tfTkFNRSlcbiAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvIHF1ZSBzZXLDoSBlbnZpYWRvOicsIHBhcmFtTmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBxdWUgc2Vyw6EgZW52aWFkbzonLCBhbGVydENvZGUpXG4gICAgICBjb25zb2xlLmxvZygnR1BfU0VSVklDRV9VUkw6JywgdGhpcy5HUF9TRVJWSUNFX1VSTClcbiAgICAgIFxuICAgICAgLy8gUHJpbWVpcm8gdGVudGEgY29tIG8gZW5kcG9pbnQgZGlyZXRvIChqw6EgcXVlIGEgVVJMIGJhc2UgasOhIGFwb250YSBwYXJhIGEgdGFzayBlc3BlY8OtZmljYSlcbiAgICAgIC8vIFNlIGZvciBhc3PDrW5jcm9uYSwgdXNhIHN1Ym1pdEpvYjsgY2FzbyBjb250csOhcmlvLCB1c2EgZXhlY3V0ZVxuICAgICAgaWYgKGlzQXN5bmMpIHtcbiAgICAgICAgLy8gVGVudGEgcHJpbWVpcm8gc2VtIG8gbm9tZSBkYSB0YXNrIChVUkwgYmFzZSBqw6EgYXBvbnRhIHBhcmEgcmVsYXRvcmlvX2FuYWxpc2VfYmFycmVpcmFzKVxuICAgICAgICBleGVjdXRlVXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vc3VibWl0Sm9iYFxuICAgICAgICBjb25zb2xlLmxvZygnVXNhbmRvIGVuZHBvaW50IGRpcmV0byAvc3VibWl0Sm9iICh0YXJlZmEgYXNzw61uY3JvbmEpOicsIGV4ZWN1dGVVcmwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGVjdXRlVXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vZXhlY3V0ZWBcbiAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBlbmRwb2ludCBkaXJldG8gL2V4ZWN1dGUgKHRhcmVmYSBzw61uY3JvbmEpOicsIGV4ZWN1dGVVcmwpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBleGVjdXRlUmVzcG9uc2UgPSBhd2FpdCBtYWtlRXhlY3V0ZVJlcXVlc3QoZXhlY3V0ZVVybClcbiAgICAgIFxuICAgICAgLy8gU2UgZGVyIGVycm8gNTAwLCBwb2RlIHNlciBxdWUgbyBlbmRwb2ludCBkYSB0YXNrIGVzcGVjw61maWNhIG7Do28gZXhpc3RhXG4gICAgICAvLyBUZW50YSBjb20gbyBlbmRwb2ludCBkYSBHUCByYWl6XG4gICAgICBpZiAoIWV4ZWN1dGVSZXNwb25zZS5vaykge1xuICAgICAgICBsZXQgcmVzdWx0VGV4dCA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS50ZXh0KClcbiAgICAgICAgY29uc29sZS53YXJuKCdQcmltZWlyYSB0ZW50YXRpdmEgZmFsaG91LiBTdGF0dXM6JywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgY29uc29sZS53YXJuKCdSZXNwb3N0YSAocHJpbWVpcm9zIDUwMCBjaGFycyk6JywgcmVzdWx0VGV4dC5zdWJzdHJpbmcoMCwgNTAwKSlcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IEpTT04ucGFyc2UocmVzdWx0VGV4dClcbiAgICAgICAgICBpZiAocmVzdWx0SnNvbi5lcnJvciAmJiByZXN1bHRKc29uLmVycm9yLmNvZGUgPT09IDUwMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIDUwMCBjb20gdGFzayBlc3BlY8OtZmljYSwgdGVudGFuZG8gY29tIGVuZHBvaW50IGRhIEdQIHJhaXouLi4nKVxuICAgICAgICAgICAgLy8gVGVudGEgY29tIG8gZW5kcG9pbnQgcmFpeiB1c2FuZG8gbyBtZXNtbyB0aXBvIChzdWJtaXRKb2Igb3UgZXhlY3V0ZSlcbiAgICAgICAgICAgIGlmIChpc0FzeW5jKSB7XG4gICAgICAgICAgICAgIGV4ZWN1dGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS9zdWJtaXRKb2JgXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBjb20gZW5kcG9pbnQgZGEgR1AgcmFpeiAoc3VibWl0Sm9iKTonLCBleGVjdXRlVXJsKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9L2V4ZWN1dGVgXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBjb20gZW5kcG9pbnQgZGEgR1AgcmFpeiAoZXhlY3V0ZSk6JywgZXhlY3V0ZVVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4ZWN1dGVSZXNwb25zZSA9IGF3YWl0IG1ha2VFeGVjdXRlUmVxdWVzdChleGVjdXRlVXJsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcGFyc2VhciByZXNwb3N0YTonLCBlKVxuICAgICAgICAgIC8vIFNlIG7Do28gY29uc2VndWlyIHBhcnNlYXIsIGNvbnRpbnVhIGNvbSBvIGVycm8gb3JpZ2luYWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBMw6ogYSByZXNwb3N0YSBtZXNtbyBzZSBuw6NvIGZvciBPSyBwYXJhIHZlciBvIGVycm8gZGV0YWxoYWRvXG4gICAgICBsZXQgcmVzdWx0XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBhd2FpdCBleGVjdXRlUmVzcG9uc2UuanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT0gUkVTUE9TVEEgQ09NUExFVEEgRE8gU1VCTUlUSk9CID09PScpXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGF0dXMgSFRUUDonLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3Bvc3RhIGRvIGV4ZWN1dGUgKEpTT04pOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQuam9iSWQ6JywgcmVzdWx0LmpvYklkKVxuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0LmpvYklEOicsIHJlc3VsdC5qb2JJRCkgLy8gQWxndW5zIHNlcnZpw6dvcyB1c2FtIGpvYklEXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQuSm9iSWQ6JywgcmVzdWx0LkpvYklkKSAvLyBPdXRyYXMgdmFyaWHDp8O1ZXMgcG9zc8OtdmVpc1xuICAgICAgICBjb25zb2xlLmxvZygnVG9kYXMgYXMgY2hhdmVzIGRvIHJlc3VsdDonLCBPYmplY3Qua2V5cyhyZXN1bHQgfHwge30pKVxuICAgICAgfSBjYXRjaCAoanNvbkVycm9yKSB7XG4gICAgICAgIC8vIFNlIG7Do28gY29uc2VndWlyIGxlciBjb21vIEpTT04sIGzDqiBjb21vIHRleHRvXG4gICAgICAgIGNvbnN0IHRleHRSZXNwb25zZSA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS50ZXh0KClcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVzcG9zdGEgbsOjbyDDqSBKU09OOicsIHRleHRSZXNwb25zZSlcbiAgICAgICAgY29uc29sZS5lcnJvcignU3RhdHVzIEhUVFA6JywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1cywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSBSZXNwb3N0YTogJHt0ZXh0UmVzcG9uc2Uuc3Vic3RyaW5nKDAsIDUwMCl9YClcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCFleGVjdXRlUmVzcG9uc2Uub2spIHtcbiAgICAgICAgLy8gU2UgYSByZXNwb3N0YSB0ZW0gdW0gZXJybyBubyBKU09OLCB1c2EgZWxlXG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCc9PT0gRVJSTyBERVRBTEhBRE8gREEgR1AgPT09JylcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdDw7NkaWdvIGRvIGVycm86JywgcmVzdWx0LmVycm9yLmNvZGUpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTWVuc2FnZW06JywgcmVzdWx0LmVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRGV0YWxoZXM6JywgcmVzdWx0LmVycm9yLmRldGFpbHMpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBjb21wbGV0bzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IsIG51bGwsIDIpKVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIE1lbnNhZ2VtIGRlIGVycm8gbWFpcyBhbWlnw6F2ZWxcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gZXhlY3V0YXIgYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8uXFxuXFxuJ1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuY29kZSA9PT0gNTAwKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ0Vycm8gaW50ZXJubyBkbyBzZXJ2aWRvciAoNTAwKS5cXG5cXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ1Bvc3PDrXZlaXMgY2F1c2FzOlxcbidcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnMS4gTyBuw7ptZXJvIGRlIGlkZWEgcG9kZSBuw6NvIGV4aXN0aXIgbm8gc2Vydmlkb3JcXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzIuIFByb2JsZW1hIG5vIHByb2Nlc3NhbWVudG8gZGEgZmVycmFtZW50YVxcbidcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnMy4gTyBzZXJ2aWRvciBwb2RlIGVzdGFyIHRlbXBvcmFyaWFtZW50ZSBpbmRpc3BvbsOtdmVsXFxuXFxuJ1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBWYWxvciBlbnZpYWRvOiAke2lkZWFOdW1iZXJ9XFxuYFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBQYXLDom1ldHJvIHVzYWRvOiAke3BhcmFtTmFtZX1cXG5cXG5gXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ1ZlcmlmaXF1ZTpcXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJy0gU2UgbyBuw7ptZXJvIGRlIGlkZWEgZXN0w6EgY29ycmV0b1xcbidcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnLSBTZSBvIHZhbG9yIGV4aXN0ZSBuYSBjYW1hZGEgZGUgYWxlcnRhc1xcbidcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnLSBBYnJhIG8gY29uc29sZSAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgQ8OzZGlnbzogJHtyZXN1bHQuZXJyb3IuY29kZX1cXG5gXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYE1lbnNhZ2VtOiAke3Jlc3VsdC5lcnJvci5tZXNzYWdlfVxcblxcbmBcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuZGV0YWlscyAmJiByZXN1bHQuZXJyb3IuZGV0YWlscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgRGV0YWxoZXM6ICR7cmVzdWx0LmVycm9yLmRldGFpbHMuam9pbignLCAnKX1cXG5cXG5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbmEgR1A6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0LmVycm9yKX1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIFNlIG7Do28gdGl2ZXIgY2FtcG8gZXJyb3IsIG1hcyBvIHN0YXR1cyBuw6NvIMOpIE9LLCBtb3N0cmEgbyByZXN1bHRhZG8gY29tcGxldG9cbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBIVFRQOicsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXMsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICBjb25zb2xlLmVycm9yKCdSZXNwb3N0YSBjb21wbGV0YTonLCByZXN1bHQpXG4gICAgICAgIGFsZXJ0KGBFcnJvIGFvIGV4ZWN1dGFyIHRhcmVmYTogJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzfSAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0fVxcblxcblZlcmlmaXF1ZSBvIGNvbnNvbGUgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzLmApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSAke0pTT04uc3RyaW5naWZ5KHJlc3VsdCl9YClcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSByZXNwb3N0YSBjb250w6ltIHVtIGpvYklkICh0YXJlZmEgYXNzw61uY3JvbmEpXG4gICAgICAvLyBQYXJhIHRhcmVmYXMgYXNzw61uY3JvbmFzLCBzdWJtaXRKb2Igc2VtcHJlIHJldG9ybmEgam9iSWRcbiAgICAgIC8vIEFsZ3VucyBzZXJ2acOnb3MgcG9kZW0gdXNhciB2YXJpYcOnw7Vlczogam9iSWQsIGpvYklELCBKb2JJZFxuICAgICAgY29uc3Qgam9iSWQgPSByZXN1bHQuam9iSWQgfHwgcmVzdWx0LmpvYklEIHx8IHJlc3VsdC5Kb2JJZFxuICAgICAgXG4gICAgICBpZiAoaXNBc3luYyB8fCByZXN1bHQuam9iSWQgfHwgcmVzdWx0LmpvYklEIHx8IHJlc3VsdC5Kb2JJZCkge1xuICAgICAgICBpZiAoIWpvYklkKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignPT09IEVSUk86IEpvYklkIG7Do28gZW5jb250cmFkbyBuYSByZXNwb3N0YSA9PT0nKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc3Bvc3RhIGNvbXBsZXRhOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignaXNBc3luYzonLCBpc0FzeW5jKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoYXZlcyBkaXNwb27DrXZlaXM6JywgT2JqZWN0LmtleXMocmVzdWx0IHx8IHt9KSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRhcmVmYSBhc3PDrW5jcm9uYSBtYXMgbsOjbyByZWNlYmV1IGpvYklkIG5hIHJlc3Bvc3RhLiBSZXNwb3N0YTogJHtKU09OLnN0cmluZ2lmeShyZXN1bHQpfWApXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ1RhcmVmYSBhc3PDrW5jcm9uYSBkZXRlY3RhZGEuIEpvYiBJRDonLCBqb2JJZClcbiAgICAgICAgXG4gICAgICAgIC8vIFBvbGxpbmcgZG8gc3RhdHVzIGRvIGpvYlxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwXG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNjBcbiAgICAgICAgbGV0IGpvYlN0YXR1cyA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIFVSTCBwYXJhIHZlcmlmaWNhciBzdGF0dXMgZG8gam9iXG4gICAgICAgICAgLy8gVXNhIGEgbWVzbWEgVVJMIGJhc2UgcXVlIGZ1bmNpb25vdSAocG9kZSBzZXIgc3VibWl0Sm9iIG91IGV4ZWN1dGUpXG4gICAgICAgICAgY29uc3QgYmFzZVVybCA9IGV4ZWN1dGVVcmwucmVwbGFjZSgnL3N1Ym1pdEpvYicsICcnKS5yZXBsYWNlKCcvZXhlY3V0ZScsICcnKVxuICAgICAgICAgIGNvbnN0IHN0YXR1c1VybCA9IHRva2VuIFxuICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9P3Rva2VuPSR7dG9rZW59JmY9anNvbmBcbiAgICAgICAgICAgIDogYCR7YmFzZVVybH0vam9icy8ke2pvYklkfT9mPWpzb25gXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ZlcmlmaWNhbmRvIHN0YXR1cyBkbyBqb2I6Jywgc3RhdHVzVXJsKVxuICAgICAgICAgIGNvbnN0IHN0YXR1c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goc3RhdHVzVXJsKVxuICAgICAgICAgIFxuICAgICAgICAgIGlmICghc3RhdHVzUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyB2ZXJpZmljYXIgc3RhdHVzIGRvIGpvYjogJHtzdGF0dXNSZXNwb25zZS5zdGF0dXN9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgam9iU3RhdHVzID0gYXdhaXQgc3RhdHVzUmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgY29uc29sZS5sb2coYFN0YXR1cyBkbyBqb2IgKHRlbnRhdGl2YSAke2F0dGVtcHRzICsgMX0pOmAsIGpvYlN0YXR1cy5qb2JTdGF0dXMpXG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iU3VjY2VlZGVkJykge1xuICAgICAgICAgICAgLy8gT2J0w6ltIG9zIHJlc3VsdGFkb3NcbiAgICAgICAgICAgIC8vIFVzYSBhIG1lc21hIFVSTCBiYXNlIHF1ZSBmdW5jaW9ub3UgKHBvZGUgc2VyIHN1Ym1pdEpvYiBvdSBleGVjdXRlKVxuICAgICAgICAgICAgY29uc3QgYmFzZVVybCA9IGV4ZWN1dGVVcmwucmVwbGFjZSgnL3N1Ym1pdEpvYicsICcnKS5yZXBsYWNlKCcvZXhlY3V0ZScsICcnKVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0VXJsID0gdG9rZW5cbiAgICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9L3Jlc3VsdHM/dG9rZW49JHt0b2tlbn0mZj1qc29uYFxuICAgICAgICAgICAgICA6IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0vcmVzdWx0cz9mPWpzb25gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVzdWx0VXJsKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXJlc3VsdFJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciByZXN1bHRhZG9zOiAke3Jlc3VsdFJlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCByZXN1bHRSZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gZGEgZXhlY3XDp8OjbyBhc3PDrW5jcm9uYTonLCByZXN1bHQpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JGYWlsZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEpvYiBmYWxob3U6ICR7am9iU3RhdHVzLm1lc3NhZ2VzID8gSlNPTi5zdHJpbmdpZnkoam9iU3RhdHVzLm1lc3NhZ2VzKSA6ICdFcnJvIGRlc2NvbmhlY2lkbyd9YClcbiAgICAgICAgICB9IGVsc2UgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iQ2FuY2VsbGVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2IgZm9pIGNhbmNlbGFkbycpXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGF0dGVtcHRzKytcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaW1lb3V0OiBPIGpvYiBkZW1vcm91IG1haXMgZGUgNjAgc2VndW5kb3MgcGFyYSBjb21wbGV0YXInKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUYXJlZmEgc8OtbmNyb25hIC0gcmVzdWx0YWRvIGrDoSBlc3TDoSBkaXNwb27DrXZlbFxuICAgICAgICBjb25zb2xlLmxvZygnVGFyZWZhIHPDrW5jcm9uYSAtIHJlc3VsdGFkbyBqw6EgZGlzcG9uw612ZWwnKVxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGNvbXBsZXRvIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXG5cbiAgICAgIC8vIFByb2Nlc3NhIG8gcmVzdWx0YWRvIC0gcHJvY3VyYSBwZWxhIFVSTCBkbyBIVE1MXG4gICAgICBsZXQgaHRtbFVybCA9IG51bGxcblxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgb3MgcmVzdWx0YWRvcyBwb2RlbSBlc3RhciBlbSB1bWEgZXN0cnV0dXJhIGRpZmVyZW50ZVxuICAgICAgLy8gUHJpbWVpcm8sIHZlcmlmaWNhIHNlIGjDoSBlcnJvc1xuICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGVuY29udHJhZG8gbm8gcmVzdWx0YWRvOicsIHJlc3VsdC5lcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcbiAgICAgIH1cblxuICAgICAgLy8gUHJvY3VyYSBlbSByZXN1bHQucmVzdWx0cyAoZXN0cnV0dXJhIGNvbXVtIHBhcmEgdGFyZWZhcyBzw61uY3JvbmFzKVxuICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzICYmIEFycmF5LmlzQXJyYXkocmVzdWx0LnJlc3VsdHMpKSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzdWx0SXRlbSBvZiByZXN1bHQucmVzdWx0cykge1xuICAgICAgICAgIC8vIE8gcmVzdWx0YWRvIHBvZGUgZXN0YXIgZGlyZXRhbWVudGUgbm8gcmVzdWx0SXRlbSBvdSBlbSByZXN1bHRJdGVtLnZhbHVlXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRJdGVtLnZhbHVlICE9PSB1bmRlZmluZWQgPyByZXN1bHRJdGVtLnZhbHVlIDogcmVzdWx0SXRlbVxuICAgICAgICAgIFxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XG4gICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBQcm9jdXJhIHBvciBwcm9wcmllZGFkZXMgY29tdW5zIHF1ZSBjb250w6ptIFVSTHNcbiAgICAgICAgICAgIGlmICh2YWx1ZS51cmwgJiYgdHlwZW9mIHZhbHVlLnVybCA9PT0gJ3N0cmluZycgJiYgdmFsdWUudXJsLmluY2x1ZGVzKCcuaHRtbCcpKSB7XG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS51cmxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUucGF0aFVybCAmJiB0eXBlb2YgdmFsdWUucGF0aFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnBhdGhVcmxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudmFsdWUgJiYgdHlwZW9mIHZhbHVlLnZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS52YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudmFsdWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgb3MgcmVzdWx0YWRvcyBwb2RlbSBlc3RhciBlbSByZXN1bHQucmVzdWx0cyBjb21vIG9iamV0b1xuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5yZXN1bHRzICYmIHR5cGVvZiByZXN1bHQucmVzdWx0cyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzdWx0LnJlc3VsdHMpKSB7XG4gICAgICAgIC8vIEl0ZXJhIHNvYnJlIGFzIHByb3ByaWVkYWRlcyBkbyBvYmpldG8gcmVzdWx0c1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQucmVzdWx0cykge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSByZXN1bHQucmVzdWx0c1trZXldXG4gICAgICAgICAgaWYgKHJlc3VsdEl0ZW0gJiYgcmVzdWx0SXRlbS52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRJdGVtLnZhbHVlXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudXJsICYmIHR5cGVvZiB2YWx1ZS51cmwgPT09ICdzdHJpbmcnICYmIHZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudXJsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnBhdGhVcmwgJiYgdHlwZW9mIHZhbHVlLnBhdGhVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS5wYXRoVXJsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2N1cmEgZW0gb3V0cmFzIHByb3ByaWVkYWRlcyBkbyByZXN1bHRhZG9cbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQub3V0cHV0VXJsKSB7XG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0VXJsXG4gICAgICB9XG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0LnVybCkge1xuICAgICAgICBodG1sVXJsID0gcmVzdWx0LnVybFxuICAgICAgfVxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5maWxlVXJsKSB7XG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQuZmlsZVVybFxuICAgICAgfVxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5vdXRwdXRGaWxlKSB7XG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0RmlsZVxuICAgICAgfVxuXG4gICAgICAvLyBCdXNjYSBwb3IgcmVnZXggZW0gdG9kbyBvIG9iamV0byAow7psdGltbyByZWN1cnNvKVxuICAgICAgaWYgKCFodG1sVXJsKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdClcbiAgICAgICAgY29uc3QgdXJsTWF0Y2ggPSByZXN1bHRTdHJpbmcubWF0Y2goL2h0dHBzPzpcXC9cXC9bXlxcc1wiPD5dK1xcLmh0bWwvZylcbiAgICAgICAgaWYgKHVybE1hdGNoICYmIHVybE1hdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBodG1sVXJsID0gdXJsTWF0Y2hbMF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaHRtbFVybCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVVJMIGRvIEhUTUwgZW5jb250cmFkYTonLCBodG1sVXJsKVxuICAgICAgICAvLyBBYnJlIG8gSFRNTCBlbSB1bWEgbm92YSBndWlhXG4gICAgICAgIHdpbmRvdy5vcGVuKGh0bWxVcmwsICdfYmxhbmsnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91IGEgVVJMLCBtb3N0cmEgbyByZXN1bHRhZG8gY29tcGxldG8gcGFyYSBkZWJ1Z1xuICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBlbmNvbnRyYXIgYSBVUkwgZG8gSFRNTCBubyByZXN1bHRhZG86JywgcmVzdWx0KVxuICAgICAgICBjb25zb2xlLndhcm4oJ1Jlc3VsdGFkbyBjb21wbGV0bzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxuICAgICAgICBhbGVydCgnUmVsYXTDs3JpbyBnZXJhZG8sIG1hcyBuw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIEhUTUwuIFZlcmlmaXF1ZSBvIGNvbnNvbGUgZG8gbmF2ZWdhZG9yIChGMTIpIHBhcmEgdmVyIG9zIGRldGFsaGVzIGRvIHJlc3VsdGFkby4nKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignPT09IEVSUk8gQ09NUExFVE8gQU8gRVhFQ1VUQVIgR1AgPT09JylcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm86JywgZXJyb3IpXG4gICAgICBjb25zb2xlLmVycm9yKCdNZW5zYWdlbTonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgY29uc29sZS5lcnJvcignU3RhY2sgdHJhY2U6JywgZXJyb3Iuc3RhY2spXG4gICAgICBjb25zb2xlLmVycm9yKCdUaXBvIGRvIGVycm86JywgZXJyb3IuY29uc3RydWN0b3IubmFtZSlcbiAgICAgIFxuICAgICAgLy8gSW5mb3JtYcOnw7VlcyBkZSBjb250ZXh0byBwYXJhIGRlYnVnXG4gICAgICBjb25zb2xlLmVycm9yKCc9PT0gQ09OVEVYVE8gRE8gRVJSTyA9PT0nKVxuICAgICAgY29uc29sZS5lcnJvcignVmFsb3IgZW52aWFkbyAoY8OzZGlnbyBkbyBhbGVydGEpOicsIGFsZXJ0Q29kZSlcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcsOibWV0cm8gdXNhZG86JywgcGFyYW1OYW1lKVxuICAgICAgY29uc29sZS5lcnJvcignVVJMIHRlbnRhZGE6JywgZXhlY3V0ZVVybClcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rva2VuIHByZXNlbnRlOicsICEhdG9rZW4pXG5cbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBnZXJhciByZWxhdMOzcmlvLlxcblxcbidcblxuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGluZm9ybWHDp8O1ZXMgdMOpY25pY2FzIG11aXRvIGxvbmdhcyBwYXJhIG8gdXN1w6FyaW9cbiAgICAgICAgbGV0IGNsZWFuTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgaWYgKGNsZWFuTWVzc2FnZS5sZW5ndGggPiAyMDApIHtcbiAgICAgICAgICBjbGVhbk1lc3NhZ2UgPSBjbGVhbk1lc3NhZ2Uuc3Vic3RyaW5nKDAsIDIwMCkgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIGVycm9yTWVzc2FnZSArPSBgTWVuc2FnZW06ICR7Y2xlYW5NZXNzYWdlfVxcblxcbmBcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yLmRldGFpbHMgJiYgQXJyYXkuaXNBcnJheShlcnJvci5kZXRhaWxzKSAmJiBlcnJvci5kZXRhaWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBEZXRhbGhlczogJHtlcnJvci5kZXRhaWxzWzBdfVxcblxcbmBcbiAgICAgIH1cblxuICAgICAgZXJyb3JNZXNzYWdlICs9ICdWZXJpZmlxdWU6XFxuJ1xuICAgICAgZXJyb3JNZXNzYWdlICs9IGAxLiBTZSBvIGPDs2RpZ28gZG8gYWxlcnRhIFwiJHthbGVydENvZGV9XCIgZXN0w6EgY29ycmV0b1xcbmBcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnMi4gU2UgbyB2YWxvciBleGlzdGUgbmEgY2FtYWRhIGRlIGFsZXJ0YXMgZGUgYmFycmVpcmFzXFxuJ1xuICAgICAgZXJyb3JNZXNzYWdlICs9ICczLiBTZSBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50byBlc3TDoSBhY2Vzc8OtdmVsXFxuJ1xuICAgICAgZXJyb3JNZXNzYWdlICs9ICc0LiBBYnJhIG8gY29uc29sZSBkbyBuYXZlZ2Fkb3IgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzIHTDqWNuaWNvc1xcblxcbidcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnRGljYTogVGVudGUgdXNhciBvIGJvdMOjbyBcIkZpbHRyYXJcIiBwcmltZWlybyBwYXJhIHZlcmlmaWNhciBzZSBvIGPDs2RpZ28gZXhpc3RlLidcblxuICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcbiAgICAgIC53aWRnZXQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgfVxuICAgICAgZm9ybSA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTRmMzI7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucmVwb3J0LWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpmb2N1czpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgICAgICY6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc3Bpbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xuICAgICAgICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICB0byB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNsZWFyLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgY29sb3I6ICMyMTIxMjE7XG4gICAgICAgIH1cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc3RhdHVzLW1lc3NhZ2Uge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2YzZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLmxvYWRpbmcge1xuICAgICAgICBjb2xvcjogIzAwNzljMTtcbiAgICAgIH1cbiAgICBgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWFkZExheWVycyBqaW11LXdpZGdldCBwLTJcIiBjc3M9e3N0eWxlfT5cbiAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3VzZU1hcFdpZGdldElkcycpICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxuXG5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVGaWx0ZXJBbmRab29tfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLnNlYXJjaElkZWF9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlkZWFTZWFyY2hJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuZmlsdGVyQW5kWm9vbX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcG9ydC1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZXJhdGVSZXBvcnR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJ31cbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5sb2FkaW5nIHx8ICF0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnIFxuICAgICAgICAgICAgICAgICAgPyAnRGlnaXRlIG8gY8OzZGlnbyBkbyBhbGVydGEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8nIFxuICAgICAgICAgICAgICAgICAgOiAnR2VyYXIgcmVsYXTDs3JpbyBwYXJhIG8gY8OzZGlnbyBkZSBhbGVydGEgaW5mb3JtYWRvJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lclwiPjwvc3Bhbj59XG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5nZW5lcmF0ZVJlcG9ydH1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuY2xlYXJGaWx0ZXJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=