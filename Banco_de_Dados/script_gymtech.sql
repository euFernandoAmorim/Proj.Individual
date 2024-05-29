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
(4, 'teste3', 'teste3@gmail.com', '123456', '2005-10-02');

insert into grupo_muscular
values
(1, 'Dorsal'),
(2, 'Peitoral'),
(3, 'Quadríceps'),
(4, 'Posterior'),
(5, 'Bíceps'),
(6, 'Tríceps'),
(7, 'Glúteos');

create table curtida
(fkUsuario int,
fkGrupo int,
curtir int,
descurtir int,
primary key (fkUsuario, fkGrupo),
foreign key (fkUsuario) references usuario (id),
foreign key (fkGrupo) references grupo_muscular (idGrupo));

insert into curtida values
(1, 1, 1, 0),
(2, 1, 0, 1),
(3, 1, 1, 0),
(4, 1, 1, 0);

select * from curtida;
truncate table curtida;

select * from grupo_muscular;

insert into usuario values
(6, 'teste5', 'teste5@gmail.com', '123456', '2005-10-02');

insert into curtida values
(1, 3, null, 1);

select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as dscurtidas from grupo_muscular
join curtida on fkgrupo = idgrupo
group by curtida.fkgrupo;

select curtida.fkUsuario, curtida.fkGrupo from curtida
join usuario on fkusuario = id where id = 1;

update curtida set curtir = null where fkusuario = 1 and fkgrupo = 1;

truncate table curtida;