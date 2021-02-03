## LibreTI - backend

### Sistema simple para um setor de TI - Backend

O **libreti** será uma ferramenta de código aberto desenvolvida em **nodejs** para gerencia um setor de T.I de pequeno porte.

A funcionalidades serão:

- [ ] Controle de Técnicos
- [ ] Controle de clientes
- [ ] Geração de Os
- [ ] Geração de Cadastro através do e-mail
- [ ] Integração com servidor smtp 
- [ ] Alertas nas mudanças de status de cada OS (Websockets)
- [ ] Controle de equipamentos

O que ta sendo trabalhado atualmente:

- Gerando Estrutura base para o projeto
	+ Construir modelo da API
		* [x] Modelando API REST
	+ [-] Criando Estrutura do banco de dados
		* [x] Criando Modelos das tabelas de Usuário
			- [x] Tipos de Usuários
				+ [x] Crud
					* [x] Controller
					* [x] Dao
			- [x] Usuarios
				+ [x] Crud
					* [x] Controller
					* [x] Dao
			- [x] Grupos
				+ [x] Crud
					* [x] Controller
					* [x] Dao
		* [x] Criando Tabelas de Equipamentos 
			- [x] Tipos de Equipamentos
				+ [x] Crud
					* [x] Controller
					* [x] Dao  
			- [x] Equipamentos  
				+ [x] Crud
					* [x] Controller
					* [x] Dao
					