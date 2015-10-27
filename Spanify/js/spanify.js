window.FB = FBWinJS;

var accessToken = localStorage.getItem('fb_access_token');

FB.options({
    appId: '268788343279639',
    accessToken: accessToken
});

var GIRL_NAMES = {

    first: [
'Abrienda'
,'Abril'
,'Acacia'
,'Adalia'
,'Adana'
,'Adelina'
,'Adelita'
,'Adella'
,'Adonia'
,'Adoracion'
,'Adriana'
,'Adriana'
,'Agacia'
,'Agdta'
,'Agnese'
,'Agueda'
,'Aida'
,'Aidia'
,'Aintzane'
,'Alameda'
,'Alandra'
,'Alanza'
,'Alazne'
,'Albertine'
,'Alda'
,'Aldene'
,'Aldona'
,'Aldonsa'
,'Aldonza'
,'Aleece'
,'Alegria'
,'Alegria'
,'Alejandra'
,'Alejandrina'
,'Aleta'
,'Aletea'
,'Aletia'
,'Aletta'
,'Alfonsa'
,'Alfreda'
,'Alhertina'
,'Alicia'
,'Alisa'
,'Alise'
,'Alita'
,'Allegra'
,'Alliss'
,'Allyce'
,'Alma'
,'Almira'
,'Almunda'
,'Almundena'
,'Almundina'
,'Aloise'
,'Alona'
,'Alondra'
,'Alonsa'
,'Alta'
,'Altagracia'
,'Alvarita'
,'Alvera'
,'Alyce'
,'Alys'
,'Alyss'
,'Amada'
,'Amalia'
,'Amalur'
,'Amalure'
,'Amanda'
,'Amara'
,'Amaranta'
,'Amaris'
,'Amarissa'
,'Amata'
,'Amor'
,'Amora'
,'Amora'
,'Ana'
,'Analee'
,'Analeigh'
,'Analena'
,'Anamarie'
,'Anarosa'
,'Andeana'
,'Andrea'
,'Andria'
,'Angela'
,'Angelia'
,'Angelina'
,'Anica'
,'Anita'
,'Anitia'
,'Anjelica'
,'Anjelita'
,'Antonia'
,'Antonina'
,'Anunciacion'
,'Aquilina'
,'Araceli'
,'Aracelia'
,'Aracely'
,'Arama'
,'Arama'
,'Arcadia'
,'Arcelia'
,'Arcelia'
,'Arcilla'
,'Arella'
,'Aricela'
,'Ariela'
,'Armanda'
,'Artemisia'
,'Artura'
,'Ascencion'
,'Asuncion'
,'Atalaya'
,'Athalia'
,'Aurelia'
,'Aureliana'
,'Azura'
,'Beatrisa'
,'Beatriz'
,'Belen'
,'Belicia'
,'Belinda'
,'Belinda'
,'Belita'
,'Bella'
,'Benigna'
,'Benita'
,'Bernicia'
,'Berta'
,'Bibiana'
,'Bienvenida'
,'Blanca'
,'Blanca'
,'Blandina'
,'Blasa'
,'Bonita'
,'Bonita'
,'Breezy'
,'Brigida'
,'Brigidia'
,'Brisa'
,'Brisha'
,'Brisia'
,'Brissa'
,'Briza'
,'Bryssa'
,'Buena'
,'Calandria'
,'Calida'
,'Calida'
,'Calvina'
,'Camila'
,'Candi'
,'Candida'
,'Candie'
,'Cari'
,'Carilla'
,'Carisa'
,'Carla'
,'Carletta'
,'Carlita'
,'Carlota'
,'Carlota'
,'Carlotta'
,'Carmela'
,'Carmelita'
,'Carmelita'
,'Carmen'
,'Carmencita'
,'Carmina'
,'Carminda'
,'Carmita'
,'Carola'
,'Carona'
,'Carrola'
,'Casandra'
,'Casey'
,'Casta'
,'Catalin'
,'Catalina'
,'Celerina'
,'Celesta'
,'Celestina'
,'Cenobia'
,'Ceri'
,'Ceria'
,'Cesara'
,'Chalina'
,'Charo'
,'Charo'
,'Chavela'
,'Chavelle'
,'Chaya'
,'Chela'
,'Chica'
,'Chiquita'
,'Chiquita'
,'Chrisanna'
,'Chrisanne'
,'Chrysann'
,'Cipriana'
,'Cira'
,'Ciri'
,'Clareta'
,'Clarinda'
,'Clarisa'
,'Clarissa'
,'Claudia'
,'Clementina'
,'Clodovea'
,'Coco'
,'Coleta'
,'Concepcion'
,'Concetta'
,'Conchetta'
,'Conshita'
,'Consolacion'
,'Consolata'
,'Constantia'
,'Constanza'
,'Consuela'
,'Consuelo'
,'Corazana'
,'Corazon'
,'Crisann'
,'Crisanna'
,'Crista'
,'Cristina'
,'Cristine'
,'Cyntia'
,'Dalila'
,'Damita'
,'Dani'
,'Daniela'
,'Danita'
,'Daria'
,'Deiene'
,'Deina'
,'Delcine'
,'Delfina'
,'Delma'
,'Delmar'
,'Delmara'
,'Delphia'
,'Denisa'
,'Desideria'
,'Destina'
,'Devera'
,'Dia'
,'Diega'
,'Digna'
,'Dina'
,'Dinora'
,'Dionis'
,'Dionisa'
,'Dita'
,'Dolores'
,'Dolorita'
,'Domenica'
,'Dominga'
,'Dominica'
,'Dona'
,'Dorbeta'
,'Dorinda'
,'Dorotea'
,'Doroteia'
,'Dreena'
,'Drina'
,'Duena'
,'Ducinea'
,'Dulce'
,'Dulce'
,'Dulcea'
,'Dulcina'
,'Dulcinea'
,'Dulcinia'
,'Earlena'
,'Earlene'
,'Earlina'
,'Edenia'
,'Edita'
,'Edita'
,'Elbertina'
,'Eldora'
,'Eldora'
,'Eleadora'
,'Eleanora'
,'Eleena'
,'Elena'
,'Elina'
,'Elisa'
,'Ella'
,'Eloisa'
,'Elsa'
,'Elvera'
,'Elvira'
,'Elvira'
,'Elvita'
,'Ema'
,'Emerald'
,'Emesta'
,'Emilia'
,'Emilie'
,'Encarnacion'
,'Engracia'
,'Enrica'
,'Enriqua'
,'Enriqueta'
,'Erendira'
,'Erendiria'
,'Erlene'
,'Erlina'
,'Ernesta'
,'Esma'
,'Esme'
,'Esmeralda'
,'Esperanza'
,'Estebana'
,'Estefana'
,'Estefani'
,'Estefania'
,'Estefany'
,'Estela'
,'Estelita'
,'Estella'
,'Estephanie'
,'Ester'
,'Esteva'
,'Estralita'
,'Estrella'
,'Estrellita'
,'Eva'
,'Evita'
,'Exaltacion'
, 'Ezmeralda'
, 'Fabia'
,'Faqueza'
,'Fausta'
,'Faustina'
,'Felicita'
,'Felisa'
,'Fermina'
,'Fidelia'
,'Fidelina'
,'Filipa'
,'Flor'
,'Floramaria'
,'Florencia'
,'Florentina'
,'Florida'
,'Florinia'
,'Florita'
,'Fonda'
,'Fonda'
,'Fortuna'
,'Francisca'
,'Freira'
,'Freira'
,'Frescura'
,'Gabriela'
,'Gabriella'
,'Gala'
,'Galena'
,'Galenia'
,'Garabina'
,'Garabine'
,'Garaitz'
,'Garbina'
,'Garbine'
,'Gaspara'
,'Gechina'
,'Generosa'
,'Gertrudes'
,'Gertrudis'
,'Gezana'
,'Grazia'
,'Guillermina'
,'Iliana'
,'Iluminada'
,'Imelda'
,'Immaculada'
,'Ines'
,'Inez'
,'Inez'
,'Inocencia'
,'Inocenta'
,'Iratze'
,'Irene'
,'Irune'
,'Isabel'
,'Isabela'
,'Isabella'
,'Isi'
,'Isidora'
,'Itsaso'
,'Itxaro'
,'Ivette'
,'Izar'
,'Izarra'
,'Izarre'
,'Izazcun'
,'Jacinta'
,'Jacinta'
,'Jade'
,'Jaione'
,'Jacinda'
,'Jasone'
,'Javiera'
,'Jesusa'
,'Jimena'
,'Joaquina'
,'Jordana'
,'Josefa'
,'Josefina'
,'Josune'
,'Jovana'
,'Jovanna'
,'Jovena'
,'Jovina'
,'Jovita'
,'Juana'
,'Juanetta'
,'Juanisha'
,'Juanita'
,'Juliana'
,'Julieta'
,'Julina'
,'Karmen'
,'Kasandra'
,'Katia'
,'Kemena'
,'Kemina'
,'Kesara'
,'Kesare'
,'Kiki'
,'Kita'
,'LaCienega'
,'Ladonna'
,'Lala'
,'Lali'
,'Lalia'
,'Lalla'
,'Landa'
,'Landra'
,'Landrada'
,'Lara'
,'Lareina'
,'LaReina'
,'Lareina'
,'Larunda'
,'Latoya'
,'Laura'
,'Laurana'
,'Laurencia'
,'Laurinda'
,'Laurita'
,'Lavina'
,'Lavinia'
,'Lea'
,'Leala'
,'Legarre'
,'Leira'
,'Lela'
,'Lenora'
,'Leonor'
,'Leonora'
,'Lera'
,'Letitia'
,'Levina'
,'Leya'
,'Lia'
,'Liana'
,'Linda'
,'Llesenia'
,'Lluvia'
,'Lola'
,'Loleta'
,'Lolita'
,'Lolitta'
,'Lora'
,'Lorda'
,'Lore'
,'Loretta'
,'Lourdes'
,'Louredes'
,'Lucena'
,'Lucila'
,'Lucita'
,'Lucrecia'
,'Luella'
,'Luisa'
,'Luiza'
,'Lupe'
,'Lupita'
,'Lur'
,'Luvenia'
,'Luvina'
,'Luz'
,'Madalena'
,'Madeira'
,'Madelynn'
,'Madena'
,'Madia'
,'Madina'
,'Madre'
,'Madrona'
,'Magdalen'
,'Magdalena'
,'Magdalene'
,'Mahogony'
,'Maite'
,'Maitea'
,'Malaya'
,'Malia'
,'Malita'
,'Manda'
,'Manoela'
,'Marcela'
,'Margarita'
,'Maria'
,'Maria'
,'Mariana'
,'Maribel'
,'Maricel'
,'Maricela'
,'Maricelia'
,'Marietta'
,'Mariquita'
,'Marisa'
,'Marisela'
,'Marisol'
,'Marisol'
,'Marquilla'
,'Marta'
,'Martina'
,'Matia'
,'Maya'
,'Melisenda'
,'Melita'
,'Melosa'
,'Melosa'
,'Melosia'
,'Mendi'
,'Mercedes'
,'Mercedes'
,'Milagritos'
,'Milagros'
,'Milagrosa'
,'Mimi'
,'Mirabel'
,'Miranda'
,'Mirari'
,'Mireya'
,'Modesta'
,'Molara'
,'Monica'
,'Mora'
,'Morisa'
,'Morissa'
,'Moya'
,'Naiara'
,'Naiara'
,'Nalda'
,'Nana'
,'Narcisa'
,'Natalia'
,'Natividad'
,'Neiva'
,'Nelia'
,'Nelida'
,'Nerea'
,'Nerita'
,'Neta'
,'Neva'
,'Nevada'
,'Nicanora'
,'Nieve'
,'Nina'
,'Nita'
,'Nita'
,'Noemi'
,'Novia'
,'Odanda'
,'Oihane'
,'Oihane'
,'Olinda'
,'Oliveria'
,'Olivia'
,'Ora'
,'Orquidea'
,'Osana'
,'Osane'
,'Pabla'
,'Paciencia'
,'Palba'
,'Palma'
,'Palmira'
,'Paloma'
,'Paloma'
,'Paquita'
,'Pastora'
,'Patricia'
,'Paulita'
,'Paz'
,'Pedra'
,'Pepita'
,'Perfecta'
,'Pia'
,'Pilar'
,'Pilar'
,'Placida'
,'Presencia'
,'Presta'
,'Primavera'
,'Prudencia'
,'Puebla'
,'Pura'
,'Pureza'
,'Purisima'
,'Querida'
,'Quinta'
,'Raimunda'
,'Raina'
,'Ramira'
,'Ramona'
,'Raquel'
,'Regina'
,'Reia'
,'Reina'
,'Reina'
,'Remedios'
,'Reya'
,'Reyna'
,'Ria'
,'Rica'
,'Ricarda'
,'Rio'
,'Rita'
,'Rita'
,'Roana'
,'Roana'
,'Rocio'
,'Roderiga'
,'Roja'
,'Roldana'
,'Romana'
,'Rosalia'
,'Rosalind'
,'Rosalinda'
,'Rosalinde'
,'Rosaline'
,'Rosalyn'
,'Rosamaria'
,'Rosario'
,'Rosemarie'
,'RosIyn'
,'Roz'
,'Rufa'
,'Rufina'
,'Sabana'
,'Sabina'
,'Salbatora'
,'Salma'
,'Salvadora'
,'Salvatora'
,'Sancha'
,'Sancha'
,'Sancia'
,'Sara'
,'Sarita'
,'Saturnina'
,'Savanna'
,'Segunda'
,'Seina'
,'Senalda'
,'Senona'
,'Serafina'
,'Serena'
,'Sevilla'
,'Shoshana'
,'Sierra'
,'Simona'
,'Socorro'
,'Sofia'
,'Solana'
,'Soledad'
,'Soledada'
,'Sonora'
,'Suelita'
,'Susana'
,'Tabora'
,'Tanis'
,'Tea'
,'Tejana'
,'Telma'
,'Teodora'
,'Terceira'
,'Teresa'
,'Teresa'
,'Teresita'
,'Tia'
,'Tierra'
,'Tranquilla'
,'Trella'
,'Trella'
,'Tulia'
,'Ula'
,'Ursulina'
,'Usoa'
,'Usoa'
,'Valencia'
,'Valencia'
,'Valentina'
,'Vanesa'
,'Ventana'
,'Ventura'
,'Verda'
,'Verdad'
,'Veronica'
,'Veta'
,'Vicenta'
,'Vina'
,'Vina'
,'Virginia'
,'Vittoria'
,'Xalbadora'
,'Xalvadora'
,'Xaviera'
,'Xevera'
,'Xeveria'
,'Xiomara'
,'Xuxa'
,'Yadra'
,'Yanamaria'
,'Yanamarie'
,'Yesenia'
,'Yoana'
,'Yolanda'
,'Zamora'
,'Zandra'
,'Zaneta'
,'Zanita'
,'Zarita'
,'Zita'
,'Zurina'

        ,'Sofia'
        ,'Isabella'
        ,'Camila'
        ,'Valentina'
        ,'Valeria'
        ,'Mariana'
        ,'Luciana'
        ,'Daniela'
        ,'Gabriela'
        ,'Victoria'
        ,'Martina'
        ,'Lucia'
        ,'Ximena'
        ,'Sara'
        ,'Samantha'
        ,'Maria José'
        ,'Emma'
        ,'Catalina'
        ,'Julieta'
        ,'Mia'
        ,'Antonella'
        ,'Renata'
        ,'Natalia'
        ,'Zoe'
        ,'Nicole'
        ,'Paula'
        ,'Amanda'
        , 'Maria Fernanda'
        , 'Fernanda'
        ,'Antonia'
        ,'Alejandra'
        ,'Juana'
        ,'Andrea'
        ,'Manuela'
        ,'Ana Sofia'
        ,'Guadalupe'
        ,'Agustina'
        ,'Elena'
        ,'Maria'
        ,'Bianca'
        ,'Ariana'
        ,'Ivanna'
        ,'Abril'
        ,'Florencia'
        ,'Carolina'
        ,'Maite'
        ,'Rafaela'
        ,'Regina'
        ,'Adriana'
        ,'Michelle'
        ,'Alma'
        ,'Violeta'
        ,'Salomé'
        ,'Abigail'
        ,'Juliana'
        ,'Valery'
        ,'Isabel'
        ,'Montserrat'
        ,'Allison'
        ,'Jazmin'
        ,'Julia'
        ,'Lola'
        ,'Luna'
        ,'Ana'
        ,'Delfina'
        ,'Alessandra'
        ,'Ashley'
        ,'Olivia'
        ,'Constanza'
        ,'Paulina'
        ,'Rebeca'
        ,'Carla'
        ,'Maria Paula'
        ,'Micaela'
        ,'Fabiana'
        ,'Miranda'
        ,'Josefina'
        ,'Laura'
        ,'Alexa'
        ,'Maria Alejandra'
        ,'Luana'
        ,'Fatima'
        ,'Sara'
        ,'Isidora'
        ,'Malena'
        ,'Romina'
        ,'Ana Paula'
        ,'Mariangel'
        ,'Amelia'
        ,'Elizabeth'
        ,'Aitana'
        ,'Ariadna'
        ,'Maria Camila'
        ,'Irene'
        ,'Silvana'
        ,'Clara'
        ,'Magdalena'
        ,'Sophie'
        ,'Josefa'
    ]

};

var PRONOUM = ["De La"];

var NAMES = {

    first: ['Abran'
        ,'Adan'
        ,'Adelio'
        ,'Adriano'
        ,'Agustin'
        ,'Aimon'
        ,'Alano'
        ,'Alanzo'
        ,'Alarico'
        ,'Alba'
        ,'Alberto'
        ,'Alberto'
        ,'Alejandro'
        ,'Alfonso'
        ,'Alfredo'
        ,'Alonso'
        ,'Alonzo'
        ,'Aluino'
        ,'Alvar'
        ,'Alvaro'
        ,'Alvino'
        ,'Amadeo'
        ,'Amado'
        ,'Ambrosio'
        ,'Amoldo'
        ,'Anastasio'
        ,'Anbessa'
        ,'Andreo'
        ,'Andres'
        ,'Angel'
        ,'Angelino'
        ,'Angelito'
        ,'Angelo'
        ,'Anibal'
        ,'Anselmo'
        ,'Anton'
        ,'Antonio'
        ,'Aquila'
        ,'Aquilino'
        ,'Archibaldo'
        ,'Arlo'
        ,'Armando'
        ,'Arnoldo'
        ,'Arturo'
        ,'Aureliano'
        ,'Aurelio'
        ,'Aurelius'
        ,'Barto'
        ,'Bartoli'
        ,'Bartolo'
        ,'Bartolome'
        ,'Basilio'
        ,'Beinvenido'
        ,'Beltran'
        ,'Bemabe'
        ,'Bembe'
        ,'Benedicto'
        ,'Bernardo'
        ,'Berto'
        ,'Blanco'
        ,'Blas'
        ,'Bonifacio'
        ,'Bonifaco'
        ,'Buinton'
        ,'Calvino'
        ,'Carlomagno'
        ,'Carlos'
        ,'Casimiro'
        ,'Casta'
        ,'Cedro'
        ,'Cesar'
        ,'Cesario'
        ,'Cesaro'
        ,'Chan'
        ,'Chano'
        ,'Charro'
        ,'Chavez'
        ,'Chayo'
        ,'Che'
        ,'Chico'
        ,'Chico'
        ,'Ciceron'
        ,'Cid'
        ,'Cidro'
        ,'Cipriano'
        ,'Cirilo'
        ,'Ciro'
        ,'Cisco'
        ,'Claudio'
        ,'Clodoveo'
        ,'Conrado'
        ,'Constantino'
        ,'Cornelio'
        ,'Cortez'
        ,'Cris'
        ,'Cristian'
        ,'Cristiano'
        ,'Cristobal'
        ,'Cristofer'
        ,'Cristofor'
        ,'Criston'
        ,'Cristos'
        ,'Cristoval'
        ,'Cruz'
        ,'Cruz'
        ,'Cuartio'
        ,'Cuarto'
        ,'Curcio'
        ,'Currito'
        ,'Curro'
        ,'Dacio'
        ,'Damario'
        ,'Damian'
        ,'Danilo'
        ,'Dantae'
        ,'Dante'
        ,'Dantel'
        ,'Dario'
        ,'Dario'
        ,'Daunte'
        ,'Delmar'
        ,'Demario'
        ,'Desiderio'
        ,'Desiderio'
        ,'Diego'
        ,'Diego'
        ,'Dino'
        ,'Domenico'
        ,'Domingo'
        ,'Donatello'
        ,'Donato'
        ,'Donzel'
        ,'Duardo'
        ,'Duarte'
        ,'Edgardo'
        ,'Edmundo'
        ,'Edwardo'
        ,'Efrain'
        ,'Elia'
        ,'Elias'
        ,'Eliazar'
        ,'Elija'
        ,'Eloy'
        ,'Elvio'
        ,'Emanuel'
        ,'Emesto'
        ,'Emilio'
        ,'Eneas'
        ,'Enrique'
        ,'Enrique'
        ,'Enzo'
        ,'Erasmo'
        ,'Ernesto'
        ,'Eron'
        ,'Esequiel'
        ,'Esteban'
        ,'Estefan'
        ,'Estevan'
        ,'Estevon'
        ,'Eugenio'
        ,'Evarado'
        ,'Everardo'
        ,'Ezequiel'
        ,'Fabio'
        ,'Fabiano'
        ,'Fanuco'
        ,'Faro'
        ,'Faron'
        ,'Fausto'
        ,'Federico'
        ,'Federico'
        ,'Feliciano'
        ,'Felipe'
        ,'Felippe'
        ,'Felix'
        ,'Feo'
        ,'Fermin'
        ,'Fernando'
        ,'Fidel'
        ,'Fidele'
        ,'Flavio'
        ,'Florentino'
        ,'Florinio'
        ,'Fraco'
        ,'Francisco'
        ,'Franco'
        ,'Frasco'
        ,'Frascuelo'
        ,'Frederico'
        ,'Fresco'
        ,'Frisco'
        ,'Gabino'
        ,'Gabriel'
        ,'Gabrio'
        ,'Galeno'
        ,'Galtero'
        ,'Garcia'
        ,'Gaspar'
        ,'Gaspard'
        ,'Geraldo'
        ,'Geronimo'
        ,'Gervasio'
        ,'Gervaso'
        ,'Gezane'
        ,'Gil'
        ,'Gilberto'
        ,'Gillermo'
        ,'Ginebra'
        ,'Ginessa'
        ,'Gitana'
        ,'Godalupe'
        ,'Godofredo'
        ,'Gorane'
        ,'Gotzone'
        ,'Gracia'
        ,'Graciana'
        ,'Gregoria'
        ,'Gregorio'
        ,'Guadalupe'
        ,'Gualterio'
        ,'Guido'
        ,'Guillelmina'
        ,'Guillermo'
        ,'Gustava'
        ,'Gustavo'
        ,'Hector'
        ,'Henriqua'
        ,'Heriberto'
        ,'Hermosa'
        ,'Hernan'
        ,'Hernandez'
        ,'Hernando'
        ,'Hidalgo'
        ,'Hilario'
        ,'Honor'
        ,'Honoratas'
        ,'Honorato'
        ,'Honoria'
        ,'Horado'
        ,'Hortencia'
        ,'Hugo'
        ,'Humberto'
        ,'Iago'
        ,'Ignacia'
        ,'Ignado'
        ,'Ignazio'
        ,'Igone'
        ,'Ileanna'
        ,'Iliana'
        ,'Incendio'
        ,'Inocencio'
        ,'Inocente'
        ,'Isadoro'
        ,'Isaias'
        ,'Ishmael'
        ,'Isidoro'
        ,'Isidro'
        ,'Ismael'
        ,'Ivan'
        ,'Jacinto'
        ,'Jacobo'
        ,'Jago'
        ,'Jaime'
        ,'Jairo'
        ,'Javier'
        ,'Jax'
        ,'Jerardo'
        ,'Jeremias'
        ,'Jerico'
        ,'Jerold'
        ,'Jeronimo'
        ,'Jesus'
        ,'Joaquin'
        ,'Jonas'
        ,'Jorge'
        ,'Jose'
        ,'Joselito'
        ,'Josias'
        ,'Josue'
        ,'Juan'
        ,'Juanito'
        ,'Julian'
        ,'Juliano'
        ,'Julio'
        ,'Justino'
        ,'Katia'
        ,'Kemen'
        ,'Lalla'
        ,'Lalo'
        ,'Lazaro'
        ,'Leandro'
        ,'Leon'
        ,'Leonardo'
        ,'Leonel'
        ,'Leonides'
        ,'Leopoldo'
        ,'Lia'
        ,'Lisandro'
        ,'Lobo'
        ,'Lonzo'
        ,'Lorenzo'
        ,'Lucero'
        ,'Luciano'
        ,'Lucila'
        ,'Lucio'
        ,'Luis'
        ,'Luiz'
        ,'Macerio'
        ,'Mannie'
        ,'Mano'
        ,'Manolito'
        ,'Manolo'
        ,'Manuel'
        ,'Manuelo'
        ,'Marco'
        ,'Marcos'
        ,'Mariano'
        ,'Mario'
        ,'Marquez'
        ,'Martin'
        ,'Martinez'
        ,'Martino'
        ,'Mateo'
        ,'Matias'
        ,'Matro'
        ,'Maureo'
        ,'Mauricio'
        ,'Mauro'
        ,'Miguel'
        ,'Milagro'
        ,'Mio'
        ,'Moises'
        ,'Monte'
        ,'Montego'
        ,'Montel'
        ,'Montenegro'
        ,'Montez'
        ,'Montrelle'
        ,'Naldo'
        ,'Natal'
        ,'Natalio'
        ,'Natanael'
        ,'Navarro'
        ,'Nemesio'
        ,'Neron'
        ,'Nestor'
        ,'Neto'
        ,'Nevada'
        ,'Nicanor'
        ,'Nicolas'
        ,'Niguel'
        ,'Noe'
        ,'Norberto'
        ,'Normando'
        ,'Oliverio'
        ,'Onofre'
        ,'Orlan'
        ,'Orlando'
        ,'Orlin'
        ,'Orlondo'
        ,'Oro'
        ,'Ovidio'
        ,'Pablo'
        ,'Pacho'
        ,'Paco'
        ,'Pacorro'
        ,'Palban'
        ,'Palben'
        ,'Pancho'
        ,'Pancho'
        ,'Pascual'
        ,'Pasqual'
        ,'Patricio'
        ,'Patrido'
        ,'Paz'
        ,'Pedro'
        ,'Pepe'
        ,'Pepillo'
        ,'Pirro'
        ,'Placido'
        ,'Ponce'
        ,'Ponce'
        ,'Porfirio'
        ,'Porfiro'
        ,'Primeiro'
        ,'Prospero'
        ,'Pueblo'
        ,'Quin'
        ,'Quinto'
        ,'Quito'
        ,'Rafael'
        ,'Rafe'
        ,'Rai'
        ,'Raimundo'
        ,'Ramirez'
        ,'Ramiro'
        ,'Ramon'
        ,'Ramon'
        ,'Ramone'
        ,'Raul'
        ,'Raulo'
        ,'Rayman'
        ,'Raymon'
        ,'Renaldo'
        ,'Renato'
        ,'Reno'
        ,'Rey'
        ,'Reyes'
        ,'Reynardo'
        ,'Ricardo'
        ,'Richie'
        ,'Rico'
        ,'Rio'
        ,'Ritchie'
        ,'Roano'
        ,'Roberto'
        ,'Rodas'
        ,'Roderigo'
        ,'Rodolfo'
        ,'Rodrigo'
        ,'Rogelio'
        ,'Roldan'
        ,'Roman'
        ,'Romano'
        ,'Romeo'
        ,'Ronaldo'
        ,'Roque'
        ,'Rosario'
        ,'Ruben'
        ,'Ruben'
        ,'Rufio'
        ,'Rufo'
        ,'Sabino'
        ,'Sal'
        ,'Salbatore'
        ,'Salomon'
        ,'Salvador'
        ,'Salvador'
        ,'Salvadore'
        ,'Salvatore'
        ,'Salvino'
        ,'Sancho'
        ,'Sancho'
        ,'Santiago'
        ,'Santo'
        ,'Santos'
        ,'Saturnin'
        ,'Saul'
        ,'Sebastiano'
        ,'Segundo'
        ,'Sein'
        ,'Senon'
        ,'Serafin'
        ,'Severo'
        ,'Silverio'
        ,'Silvino'
        ,'Socorro'
        ,'Sol'
        ,'Stefano'
        ,'Suelita'
        ,'Tabor'
        ,'Tadeo'
        ,'Tadeo'
        ,'Tajo'
        ,'Taurino'
        ,'Tauro'
        ,'Tavio'
        ,'Tejano'
        ,'Teo'
        ,'Teodor'
        ,'Teodoro'
        ,'Terciero'
        ,'Teyo'
        ,'Timo'
        ,'Timoteo'
        ,'Tito'
        ,'Tobias'
        ,'Tohias'
        ,'Toli'
        ,'Tomas'
        ,'Tonio'
        ,'Toro'
        ,'Tulio'
        ,'Turi'
        ,'Turi'
        ,'Ulises'
        ,'Urbano'
        ,'Urbano'
        ,'Valentin'
        ,'Veto'
        ,'Vicente'
        ,'Victor'
        ,'Victoriano'
        ,'Victorino'
        ,'Victorio'
        ,'Victoro'
        ,'Vidal'
        ,'Vidal'
        ,'Videl'
        ,'Vincente'
        ,'Virgilio'
        ,'Vito'
        ,'Xabat'
        ,'Xalbador'
        ,'Xalvador'
        ,'Xavier'
        ,'Xever'
        ,'Zacarias'
        ,'Santiago'
        ,'Sebastian'
        ,'Matias'
        ,'Mateo'
        ,'Nicolas'
        ,'Alejandro'
        ,'Diego'
        ,'Samuel'
        ,'Benjamin'
        ,'Daniel'
        ,'Joaquin'
        ,'Lucas'
        ,'Tomas'
        ,'Gabriel'
        ,'Martin'
        ,'David'
        ,'Emiliano'
        ,'Jeronimo'
        ,'Emmanuel'
        ,'Agustin'
        ,'Pablo'
        ,'José'
        ,'Andrés'
        ,'Thiago'
        ,'Leonardo'
        ,'Felipe'
        ,'Angel'
        ,'Maximiliano'
        ,'Christian'
        ,'Christopher'
        ,'Guevarra'
        ,'Adrian'
        ,'Pablo'
        ,'Rodrigo'
        ,'Alexander'
        ,'Ignacio'
        ,'Emilio'
        ,'Dylan'
        ,'Bruno'
        ,'Carlos'
        ,'Vicente'
        ,'Valentino'
        ,'Santino'
        ,'Julian'
        ,'Sebastian'
        ,'Aaron'
        ,'Lautaro'
        ,'Axel'
        ,'Fernando'
        ,'Ian'
        ,'Manuel'
        ,'Luciano'
        ,'Francisco'
        ,'Juan David'
        ,'Igor'
        ,'Facundo'
        ,'Rafael'
        ,'Alex'
        ,'Franco'
        ,'Antonio'
        ,'Luis'
        ,'Isaac'
        ,'Maximo'
        ,'Pedro'
        ,'Ricardo'
        ,'Sergio'
        ,'Eduardo'
        ,'Bautista'
        ,'Miguel'
        ,'Cristobal'
        ,'Kevin'
        ,'Jorge'
        ,'Alonso'
        ,'Anthony'
        ,'Simon'
        ,'Juan'
        ,'Joshua'
        ,'Diego'
        ,'Alejandro'
        ,'Maria'
        ,'Mario'
        ,'Alan'
        ,'Josué'
        ,'Gael'
        ,'Hugo'
        ,'Ivan'
        ,'Damian'
        ,'Lorenzo'
        ,'Esteban'
        ,'Alvaro'
        ,'Valentin'
        ,'Dante'
        ,'Jacobo'
        ,'Camilo'
        ,'Juan Esteban'
        , 'Elias']
};

var output_name;
var input_name;

$(document).ready(function () {
    $(".int_input")
        .each(function () {
            $(this).data('default_input', $(this).val());
        })
        .focus(function () {
            if (!$(this).hasClass('edited')) {
                $(this).val('').addClass('edited');
            }
            $(this).unbind('enterkeygo').on('keydown.enterkeygo', function (e) {
                if (e.keyCode === 13) {
                    generate($(this).val());
                }
            });
        })
        .blur(function () {
            if ($(this).val() === '') {
                $(this)
                    .removeClass('edited')
                    .val($(this).data('default_input'));
            }
        })
        .keydown(function () {
            if ($(this).val() === '') {
                $('#btn_generate_girl').removeClass('activated');
                $('#btn_generate_boy').removeClass('activated');
            } else {
                $('#btn_generate_girl').addClass('activated');
                $('#btn_generate_boy').addClass('activated');
            }
        });

    $('#btn_generate_girl').click(function () {
        if ($(this).hasClass('activated')) {
            generate($('.int_input').val(), 'girl');
        }
    });

    $('#btn_generate_boy').click(function () {
        if ($(this).hasClass('activated')) {
            generate($('.int_input').val(), 'boy');
        }
    });

    $("#facebook").click(function(){
        publishStatus(null, output_name);
    });

});

var interval;

function generate(name, sex) {
    $("#facebook").hide();

    name = $.trim(name);

    if (name == "")
        return;

    $('.int_input').val(name);

    $('#name_here').hide();

    input_name = name;
    
    Math.seedrandom(name.toLowerCase());

    //$('.real_name_here').html(name);

    output_name = getOutputName(name, sex);

    localStorage["name"] = output_name;

    $('#name_here').html(output_name);

    $('#name_here').fadeIn('slow');

    setTimeout(function () {
        $("#facebook").fadeIn('slow');
    }, 500);

    if (interval)
        clearInterval(interval);

    updateTile();

    interval = setInterval(function () {
       
        updateTile();

    }, 60000);

};

function updateTile() {

    var hey = "";

    var d = new Date()
    var time = d.getHours()
    if (time < 10) {
        hey = "Good morning";
    }
    else if (time > 10 && time < 16) {
        hey = "Good afternoon";
    }
    else {
        hey = "Good evening";
    }

    var tileContent = NotificationsExtensions.TileContent.TileContentFactory.createTileSquare310x310Text09();
    tileContent.textHeadingWrap.text = hey + ", " + output_name;

    // Create a notification for the Wide310x150 tile using one of the available templates for the size.
    var wide310x150Content = NotificationsExtensions.TileContent.TileContentFactory.createTileWide310x150Text03();
    wide310x150Content.textHeadingWrap.text = hey + ", " + output_name;

    // Create a notification for the Square150x150 tile using one of the available templates for the size.
    var square150x150Content = NotificationsExtensions.TileContent.TileContentFactory.createTileSquare150x150Text04();
    square150x150Content.textBodyWrap.text = hey + ", " + output_name;

    // Attach the Square150x150 template to the Wide310x150 template.
    wide310x150Content.square150x150Content = square150x150Content;

    // Attach the Wide310x150 template to the Square310x310 template.
    tileContent.wide310x150Content = wide310x150Content;

    // Send the notification to the application’s tile.
    Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileContent.createNotification());
};

function splitter(name) {
    var list = [];

    var split = name.split(' ');
    
    for (var i = 0; i < split.length; i++) {

        var nameSplit = $.trim(split[i]);
        if (nameSplit !== "") {
            list.push(nameSplit);
        }
    }

    return list;

}

function getOutputName(name, sex) {

    var split = splitter(name);
    var out_first = '';
    var out_middle = '';
    var out_last = '';

    for (var i = 0; i < split.length; i++) {

        var nameSplit = $.trim(split[i]);

        if (nameSplit.length > 2) {
            if (nameSplit !== "" && out_first == "")
                out_first = processName(nameSplit, 'first', sex);
            else if (nameSplit !== "" && out_middle == "")
                out_middle = processName(nameSplit, (split.length == 2) ? 'last' : 'middle', sex);
            else if (nameSplit !== "" && out_last == "")
                out_last = processName(nameSplit, 'last', sex);
        }
    }

    var full_name = out_first + (out_middle !== '' ? (' ' + out_middle) : '');

    full_name = full_name + (out_last !== '' ? (' ' + out_last) : '');

    return full_name;

    function scrambleArray(myArray) {
        var i = myArray.length,
            j, tempi, tempj;
        if (i===0) return false;
        while (--i) {
            j = Math.floor(Math.random() * (i + 1));
            tempi = myArray[i];
            tempj = myArray[j];
            myArray[i] = tempj;
            myArray[j] = tempi;
        }
    }

    function addPronoum(name) {

        if (name[name.length - 1] == "a") {
            var x = 0;
            return PRONOUM[x] + " " + name;
        } else {
            return name;
        }
    }

    function processName(name, type, sex) {

        var changedName = name;

        var names;

        var girls = GIRL_NAMES["first"].slice(0, GIRL_NAMES["first"].length);
        var boys = NAMES["first"].slice(0, NAMES["first"].length);

        if (type == "last") {
           var found = false;

            if (!found) {

                changedName = changedName.replace("ao", "ion");

                var findO = changedName.indexOf("o");
                if (findO > 0) {
                    if (!changedName[findO - 1].match(/[aeiou]/i)) {
                        if ((changedName.length > findO + 1) && (!changedName[findO + 1].match(/[aeiou]/i)))
                            changedName = changedName.substring(0, findO) + "ue" + changedName.substring(findO + 1, changedName.length);
                    }
                }
                
                sex = "girl";
                names = boys;
                $(girls).each(function (i, e) {
                    names.push(e);
                });
            } else {
                changedName = addPronoum(changedName);

                return changedName;
            }

            changedName = addPronoum(changedName);

            if (changedName == name) {

                var endsWithVowel = (changedName[changedName.length - 1].match(/[aeiou]/i));

                if (endsWithVowel) {
                    return changedName;
                }

                changedName = changedName.toLowerCase();

                if (sex == "boy") {
                    $(boys).each(function (i, e) {
                        if (changedName == e.toLowerCase()) {
                            found = true;
                            changedName = e;
                            return;
                        }
                    });
                } else {
                    $(girls).each(function (i, e) {
                        if (changedName == e.toLowerCase()) {
                            found = true;
                            changedName = e;
                            return;
                        }
                    });
                }

            }

        }
        else {
            changedName = changedName.toLowerCase();
            changedName = changedName.replace("k", "c");

            if (sex == "girl") {
                changedName = changedName.replace("y", "ia");

                var found = false;
                $(girls).each(function (i, e) {
                    if (changedName == e.toLowerCase()) {
                        found = true;
                        changedName = e;
                        return;
                    }
                });
                if (found)
                    return changedName;

                names = girls;

                found = false;
                $(boys).each(function (i, e) {
                    if (changedName == e.toLowerCase()) {
                        found = true;
                        return;
                    }
                });
                if (found) {
                    if (changedName[changedName.length - 1].match(/[aeiou]/i))
                        changedName = changedName.substring(0, changedName.length - 1) + "a";
                    else
                        changedName += "a";
                }

            } else {
                changedName = changedName.replace("y", "io");

                var found = false;
                $(boys).each(function (i, e) {
                    if (changedName == e.toLowerCase()) {
                        found = true;
                        changedName = e;
                        return;
                    }
                });
                if (found)
                    return changedName;

                names = boys;

                var found = false;
                $(girls).each(function (i, e) {
                    if (changedName == e.toLowerCase()) {
                        found = true;
                        return;
                    }
                });
                if (found) {
                    if (changedName[changedName.length - 1].match(/[aeiou]/i))
                        changedName = changedName.substring(0, changedName.length - 1) + "o";
                    else
                        changedName += "o";
                }


            }

            if (!changedName[changedName.length - 1].match(/[aeiou]/i)) {

                if (sex == "girl")
                    changedName += "a";
                else
                    changedName += "o";
            }
       }

        //var letters_by_type = getLettersByType(changedName);

        
        //scrambleArray(names);

        var best = {
            name: '',
            score: 0
        };
        for (var i = 0; i < names.length; i++) {
            var score = scoreName(changedName, names[i].toLowerCase(), type);
            if (score == 99999) {
                best.name = names[i];
                best.score = score;
                break;
            } else if (score > best.score) {
                best.name = names[i];
                best.score = score;
            }
        }
        return capitaliseFirstLetter(best.name);

        function capitaliseFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function scoreName(real_name, compare_name, type) {
            var score = 0;
            if (compare_name === real_name) { // || (exclusions.indexOf(compare_name) !== -1)){
                return 99999;
            }
            //syllable
            var real_name_syllables = countSyllables(real_name);
            var compare_name_syllables = countSyllables(compare_name);

            //first letter is consonant/vowel
            if (real_name_syllables === compare_name_syllables) {
                score += 10;
            }


            var n = (real_name.length < compare_name.length) ? real_name.length : compare_name.length;
            
            
            for (var k = 0; k < n; k++) {

                var rletter = real_name[k];
                var cletter = compare_name[k];

                var realHasVowel = rletter.match(/[aeiou]/i);
                var fakeHasVowel = cletter.match(/[aeiou]/i);

                if (!((realHasVowel == null) ^ (fakeHasVowel == null))) { //if vowel
                    score += 5;
                }

                if (rletter == cletter || (rletter == "e" && cletter == "i") || (rletter == "i" && cletter == "e")) { //if same letter
                    score += 5;
                }
            }


            ////add matches
            //var letters_by_type_compare = getLettersByType(compare_name);
            //var consonant_matches = listMatches(letters_by_type.consonants, letters_by_type_compare.consonants);
            //var vowel_matches = listMatches(letters_by_type.vowels, letters_by_type_compare.vowels);
            //score += consonant_matches.matchScore + vowel_matches.matchScore;
            //var mismatches = consonant_matches.mismatches + vowel_matches.mismatches;

            //var first_letter_matches = real_name[0] == compare_name[0];
            //var last_letter_matches = real_name[real_name.length - 1] == compare_name[compare_name.length - 1];
            //if (first_letter_matches) {
            //    score += 20;
            //}
            //if (last_letter_matches) {
            //    score += 5;
            //}
            ////if(console){console.log(consonant_matches.mismatches, vowel_matches.mismatches, real_name, compare_name, score);}
            //if(type==='first'&&(first_letter_matches||last_letter_matches)&&((mismatches/real_name.length)<=0.25)){
            //    //if(console){console.log('PENALTY');}
            //    score -= 50;
            //}

            return score;

            function listMatches(la, lb) {
                var c = 0;
                var e = 0;
                for (var i = 0; i < la.length; i++) {
                    var lb_index = lb.indexOf(la[i]);
                    if (lb_index > -1) {
                        c += 3 - ((i / la.length) - (lb_index / lb.length));
                    }
                    else{
                        e += 1;
                    }
                }
                return {matchScore:c,mismatches:e};
            }

            function isVowel(c) {
                return ['a', 'e', 'i', 'o', 'u'].indexOf(c) !== -1;
            }
        }
    }

    function getLettersByType(name) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        var out = {
            vowels: [],
            consonants: []
        };
        for (var i = 0; i < name.length; i++) {
            var character = name[i];
            if (vowels.indexOf(character) > -1 && out.vowels.indexOf(character) === -1) {
                out.vowels.push(character);
            } else if (out.consonants.indexOf(character) === -1) {
                out.consonants.push(character);
            }
        }
        return out;
    }
};
function getShareLink(){
    //return Sharing.getURL() + '?' + 'name=' + this.input_name.replace(/ /i,'_');
    return Sharing.getURL();
};
function checkParameters(){
    var params = getUrlVars();
    if(params.name){
        this.generate(formatInputString(params.name));
    }
    function formatInputString(s){
        function truncateString(s){
            if(s.length > 30){
                var sub = s.substring(0,30);
                return sub;
            }
            return s;
        }
        return truncateString(s.replace(/_/g,' ')).trim().replace(/ +(?= )/g,'');
    }
};

countSyllables = function (word) {
    word = word.toLowerCase(); //word.downcase!
    if (word.length <= 3) {
        return 1;
    } //return 1 if word.length <= 3

    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ''); //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    word = word.replace(/^y/, ''); //word.sub!(/^y/, '')

    var wordTemp = word;

    var counter = 0;
    var match = word.match(/a/i);
    if (match) {
        counter += match.length;
        word = word.replace(/a/i, '');
    }

    match = word.match(/e/i);
    if (match) {
        counter += match.length;
        word = word.replace(/e/i, '');
    }
    match = word.match(/i/i);
    if (match) {
        counter += match.length;
        word = word.replace(/i/i, '');
    }
    match = word.match(/o/i);
    if (match) {
        counter += match.length;
        word = word.replace(/o/i, '');
    }
    match = word.match(/u/i);
    if (match) {
        counter += match.length;
        word = word.replace(/u/i, '');
    }

    word = wordTemp;

    if (counter == 0)
        counter = 1;

    return counter;

};