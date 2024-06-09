create database gymtech;
drop database gymtech;
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
nome varchar(45));

create table combinacao
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

drop table combinacao;
drop table treino;
drop table exercicio;
drop table curtida;

insert into treino values
(default, 'Dorsal 1'),
(default, 'Dorsal 2'),
(default, 'Dorsal 3'),
(default, 'Peitoral 1'),
(default, 'Peitoral 2'),
(default, 'Peitoral 3'),
(default, 'Quadríceps 1'),
(default, 'Quadríceps 2'),
(default, 'Quadríceps 3'),
(default, 'Posterior 1'),
(default, 'Posterior 2'),
(default, 'Bíceps 1'),
(default, 'Bíceps 2'),
(default, 'Bíceps 3'),
(default, 'Tríceps 1'),
(default, 'Tríceps 2');

insert into exercicio values
(default, 'puxada aberta'),
(default, 'puxada triângulo'),
(default, 'remada baixa unilateral'),
(default, 'remada curvada'),
(default, 'remada cavalinho'),
(default, 'pull down'),
(default, 'puxada baixa pegada aberta'),
(default, 'serrote'),
(default, 'Supino reto barra'), 
(default, 'Supino reto halteres'), 
(default, 'Supino inclinado barra'),
(default, 'Supino inclinado halteres'),
(default, 'Supino declinado halteres'),
(default, 'Crusifixo'),
(default, 'Crusifixo inclinado'),
(default, 'Crossover Polia Baixa'),
(default, 'Crossover Polia Alta'),
(default, 'extensora'), 
(default, 'agachamento livre'), 
(default, 'leg press 45'), 
(default, 'leg press horizontal'), 
(default, 'agachamento bulgaro'), 
(default, 'afundo'), 
(default, 'cadeira abdutora'),
(default, 'stiff'), 
(default, 'mesa flexora'), 
(default, 'cadeira flexora'), 
(default, 'elevação pélvica'), 
(default, 'cadeira adutora'), 
(default, 'terra sumô'),
(default, 'Rosca direta barra W'),
(default, 'Rosca Scott'),
(default, 'Rosca 45'),
(default, 'Rosca martelo'),
(default, 'Rosca direta com halteres'),
(default, 'Rosca 21'),
(default, 'tríceps corda'),
(default, 'tríceps francês'),
(default, 'tríceps testa na polia'),
(default, 'tríceps testa com barra'),
(default, 'parelela máquina'),
(default, 'coice');

insert into combinacao values
(1, 4), (1, 8), (1, 3), (1, 5),
(2, 1), (2, 3), (2, 6), (2, 8),
(3, 4), (3, 2), (3, 1), (3, 7),
(4, 12), (4, 9), (4, 16), (4, 15),
(5, 10), (5, 11), (5, 14), (5, 17),
(6, 12), (6, 10), (6, 15), (6, 17),
(7, 19), (7, 20), (7, 21), (7, 23),
(8, 22), (8, 18), (8, 23), (8, 25),
(9, 19), (9, 21), (9, 24), (9, 23),
(10, 30), (10, 28), (10, 27), (10, 29),
(11, 25), (11, 26), (11, 27), (11, 29),
(12, 31), (12, 32), (12, 33), (12, 34),
(13, 35), (13, 34), (13, 33), (13, 32),
(14, 34), (14, 35), (14, 33), (14, 36),
(15, 37), (15, 39), (15, 38), 
(16, 40), (16, 42), (16, 41);

insert into curtida values
(1, 1, 1, 1, null), (1, 1, 2, 1, null), (1, 1, 3, 1, null),
(2, 1, 1, null, 1), (2, 1, 2, 1, null), (2, 1, 3, null, 1),
(3, 1, 1, 1, null), (3, 1, 2, null, 1), (3, 1, 3, 1, null),
(4, 1, 1, null, 1), (4, 1, 2, 1, null), (4, 1, 3, null, 1),
(5, 1, 1, 1, null), (5, 1, 2, 1, 1), (5, 1, 3, 1, null),
(6, 1, 1, null, 1), (6, 1, 2, 1, 1), (6, 1, 3, null, 1),
(1, 2, 4, 1, null), (1, 2, 5, 1, null), (1, 2, 6, 1, null),
(2, 2, 4, null, 1), (2, 2, 5, null, 1), (2, 2, 6, 1, null),
(3, 2, 4, 1, null), (3, 2, 5, 1, 1), (3, 2, 6, null, 1),
(4, 2, 4, null, 1), (4, 2, 5, 1, null), (4, 2, 6, 1, null),
(5, 2, 4, 1, null), (5, 2, 5, 1, 1), (5, 2, 6, 1, null),
(6, 2, 4, 1, null), (6, 2, 5, 1, 1), (6, 2, 6, 1, null),
(1, 3, 7, 1, 1), (1, 3, 8, 1, null), (1, 3, 9, null, 1),
(2, 3, 7, 1, null), (2, 3, 8, 1, null), (2, 3, 9, 1, 1),
(3, 3, 7, 1, 1), (3, 3, 8, 1, null), (3, 3, 9, 1, 1),
(4, 3, 7, 1, null), (4, 3, 8, 1, 1), (4, 3, 9, 1, null),
(5, 3, 7, 1, null), (5, 3, 8, 1, null), (5, 3, 9, 1, null),
(6, 3, 7, 1, null), (6, 3, 8, 1, null), (6, 3, 9, 1, null),

(1, 4, 10, 1, 1), (1, 4, 11, 1, 1),
(2, 4, 10, 1, null), (2, 4, 11, 1, null),
(3, 4, 10, 1, 1), (3, 4, 11, 1, null),
(4, 4, 10, 1, null), (4, 4, 11, 1, null),
(5, 4, 10, 1, null), (5, 4, 11, 1, 1),
(6, 4, 10, 1, null), (6, 4, 11, 1, null),

(1, 5, 12, 1, null), (1, 5, 13, 1, 1), (1, 5, 14, 1, null),
(2, 5, 12, 1, 1), (2, 5, 13, 1, 1), (2, 5, 14, 1, 1),
(3, 5, 12, 1, null), (3, 5, 13, 1, 1), (3, 5, 14, 1, null),
(4, 5, 12, 1, 1), (4, 5, 13, 1, 1), (4, 5, 14, 1, 1),
(5, 5, 12, 1, 1), (5, 5, 13, 1, 1), (5, 5, 14, 1, null),
(6, 5, 12, 1, null), (6, 5, 13, 1, 1), (6, 5, 14, 1, null),
(1, 6, 15, 1, 1), (1, 6, 16, 1, null), 
(2, 6, 15, 1, 1), (2, 6, 16, 1, null), 
(3, 6, 15, 1, null), (3, 6, 16, 1, 1), 
(4, 6, 15, 1, null), (4, 6, 16, 1, null), 
(5, 6, 15, 1, 1), (5, 6, 16, 1, null), 
(6, 6, 15, 1, null), (6, 6, 16, 1, 1);

truncate table curtida;


select * from exercicio;
select * from curtida;
select * from usuario;
select * from grupo_muscular;
select * from treino;
select * from combinacao;

select grupo_muscular.nome as treino, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
join curtida on fkgrupo = idgrupo
group by curtida.fkgrupo;

select treino.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from curtida
join treino on fktreino = idtreino
group by curtida.fktreino;


  select treino.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from curtida
    join treino on fktreino = idtreino
	where fkgrupo = 5
    group by curtida.fktreino;
    
        select treino.nome as treino, count(curtir) as curtidas, count(descurtir) as descurtidas from curtida
    join treino on fktreino = idtreino
    where fkGrupo = 1
    group by curtida.fktreino;