create database gymtech;

use gymtech;

create table usuario 
(id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
dtnasc date);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table grupo_muscular
(idgrupo int primary key auto_increment,
nome varchar(45));

insert into usuario values
(1, 'Fer', 'fernando@gmail.com', '020312', '2005-10-02'),
(2, 'teste', 'teste@gmail.com', '123456', '2005-10-02'),
(3, 'teste2', 'teste2@gmail.com', '123456', '2005-10-02'),
(4, 'teste3', 'teste3@gmail.com', '123456', '2005-10-02'),
(5, 'teste4', 'teste4@gmail.com', '123456', '2005-10-02'),
(6, 'teste5', 'teste5@gmail.com', '123456', '2005-10-02');

insert into grupo_muscular
values
(1, 'Dorsal'),
(2, 'Peitoral'),
(3, 'Quadríceps'),
(4, 'Posterior'),
(5, 'Bíceps'),
(6, 'Tríceps');

create table exercicio
(idExercicio int primary key auto_increment,
nome varchar(45));

create table treino 
(idTreino int primary key auto_increment,
nome varchar(45),
fkGrupo int,
foreign key (fkGrupo) references grupo_muscular (idgrupo));

create table exercicios_do_treino
(fktreino int,
fkexercicio int,
primary key (fkexercicio, fktreino),
foreign key (fktreino) references treino (idtreino),
foreign key (fkexercicio) references exercicio (idexercicio));

create table curtida
(fkUsuario int,
fkGrupo int,
fkTreino int,
curtir int,
descurtir int,
primary key (fkUsuario, fkGrupo, fkTreino),
foreign key (fkUsuario) references usuario (id),
foreign key (fkGrupo) references grupo_muscular (idGrupo),
foreign key (fkTreino) references treino (idtreino));

insert into curtida values
(1, 1, 1, null),
(2, 1, null, 1),
(3, 1, 1, null),
(4, 1, null, 1),
(5, 1, 1, null),
(6, 1, 1, 1),
(1, 2, null, 1),
(2, 2, 1, 1),
(3, 2, 1, null),
(4, 2, 1, 1),
(5, 2, 1, null),
(6, 3, 1, null),
(1, 3, null, 1),
(2, 3, 1, null),
(3, 3, null, 1),
(4, 3, null, 1),
(5, 4, 1, 1),
(6, 4, 1, 1),
(1, 4, null, 1),
(2, 4, 1, 1),
(3, 4, 1, null),
(4, 5, 1, 1),
(5, 5, 1,null),
(6, 5, null, 1),
(1, 5, 1, null),
(2, 5, 1, 1),
(3, 6, 1, null),
(4, 6, 1, 1),
(5, 6, null, 1),
(6, 6, 1, 1),
(1, 6, 1, 1),
(2, 6, 1, null);


select * from curtida;
truncate table curtida;

select * from grupo_muscular;

select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as dscurtidas from grupo_muscular
join curtida on fkgrupo = idgrupo
group by curtida.fkgrupo;

select curtida.fkUsuario, curtida.fkGrupo from curtida
join usuario on fkusuario = id where id = 1;

