create database gymtech;

use gymtech;

create table usuario 
(id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
dtnasc date);

create table musculo
(idmusculo int primary key auto_increment,
nome varchar(45),
regiao varchar(45),
fkusuario int,
foreign key fkMusculoUsuario (fkusuario) references usuario (id));

create table exercicio 
(idexercicio int primary key auto_increment,
nome varchar(45),
descricao varchar(100),
fkmusculo int, 
foreign key fkExercicioMusculo (fkmusculo) references musculo (idmusculo));

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

create table curtida
(fkUsuario int,
fkGrupo int,
curtir int,
descurtir int,
primary key (fkUsuario, fkGrupo),
foreign key (fkUsuario) references usuario (id),
foreign key (fkGrupo) references grupo_muscular (idGrupo));

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

