Create database venta_autos;
use venta_autos;

Create table autos (
	id INT auto_increment primary key, 
    marca varchar (50),
    modelo varchar (50),
    año  int,
    precio decimal (10,2),
    color varchar(30),
    transmision varchar (20),
    estado varchar(20)
);