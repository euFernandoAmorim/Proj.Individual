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

select * from usuario;