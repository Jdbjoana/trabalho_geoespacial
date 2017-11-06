use joana_dbgeo;

db.alunos.insert( {
    nome: "Joana",
   localizacao: { type: "Point", coordinates: [ -43.310403, -15.7943479 ] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Luana",
   localizacao: { type: "Point", coordinates: [-43.3160809,-15.8052074] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Alberto",
   localizacao: { type: "Point", coordinates: [-43.3179225,-15.8057438] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Layla",
   localizacao: { type: "Point", coordinates: [-43.3179687,-15.8198619] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Thalia",
   localizacao: { type: "Point", coordinates: [-43.341919,-15.792172] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Emilly Raissa",
   localizacao: { type: "Point", coordinates: [-43.312611,-15.807591] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Sávia",
   localizacao: { type: "Point", coordinates: [-43.3223997,-15.7814025] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Dieyse",
   localizacao: { type: "Point", coordinates: [-43.323578,-15.78180] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Vitoria Indred",
   localizacao: { type: "Point", coordinates: [-43.314893,-15.817489] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "João Vitor",
   localizacao: { type: "Point", coordinates: [-43.306551,-15.8147075] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Michelle",
   localizacao: { type: "Point", coordinates: [-43.312391,-15.8263155] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Maria Thais",
   localizacao: { type: "Point", coordinates: [-43.0288791,-15.7377377] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Ádrian Marcello",
   localizacao: { type: "Point", coordinates: [-43.304557,-15.811190] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Lara",
   localizacao: { type: "Point", coordinates: [-43.3153666,-15.8197566] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Camila",
   localizacao: { type: "Point", coordinates: [-43.2960149,-15.8251198] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Lívia",
   localizacao: { type: "Point", coordinates: [-43.314748,-15.7953561] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Micaelle",
   localizacao: { type: "Point", coordinates: [-43.3148092,-15.8221044] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Flora",
   localizacao: { type: "Point", coordinates: [-43.3051085,-15.8018395] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Jade",
   localizacao: { type: "Point", coordinates: [-43.309728,-15.819087] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Sidney",
   localizacao: { type: "Point", coordinates: [-43.3121088,-15.8036004] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Lavínia",
   localizacao: { type: "Point", coordinates: [-43.3168428,-15.8045297] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Victória",
   localizacao: { type: "Point", coordinates: [-43.300751,-15.818761] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Emille Beatriz",
   localizacao: { type: "Point", coordinates: [-43.3125666,-15.8039344] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Hellen Aline",
   localizacao: { type: "Point", coordinates: [-43.3165794,-15.7990549] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Joyce",
   localizacao: { type: "Point", coordinates: [-43.3087511,-15.8290764] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Amanda",
   localizacao: { type: "Point", coordinates: [-43.314899,-15.802350] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Luan",
   localizacao: { type: "Point", coordinates: [-43.3138138,-15.8007558] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "João Gabriel",
   localizacao: { type: "Point", coordinates: [-43.3049733,-15.8489078] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Mercia",
   localizacao: { type: "Point", coordinates: [-43.0685685,-15.5343928] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Daniel",
   localizacao: { type: "Point", coordinates: [-43.304923,-15.8025955] },
   categria: "alunos"
} );

db.alunos.insert( {
    nome: "Tom Roberto",
   localizacao: { type: "Point", coordinates: [-43.3090244,-15.802596] },
   categria: "alunos"
} );

db.alunos.createIndex( { localizacao: "2dsphere" } )


