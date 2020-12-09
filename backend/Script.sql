IF (DB_ID('ContinuousFeedback') IS NULL)
 CREATE DATABASE ContinuousFeedback
 GO
 USE ContinuousFeedback
 GO
 IF OBJECT_ID('Rol') IS NULL
  CREATE TABLE Rol
  (
  RolId INT NOT NULL IDENTITY(1,1),
  NumeRol NVARCHAR(100) NOT NULL,
  CONSTRAINT PK_Rol PRIMARY KEY(RolId)
  )
  GO
  IF OBJECT_ID('Utilizator') IS NULL
   CREATE TABLE Utilizator
   (
   UserId int NOT NULL IDENTITY(1,1),
   Email NVARCHAR(100) NOT NULL,
   Password NVARCHAR(100)  NOT NULL,
   CONSTRAINT PK_User PRIMARY KEY(UserId)
   )
  --IF OBJECT_ID('Utilizator') IS NULL
   ALTER TABLE Utilizator ADD RolId int NOT NULL
  IF OBJECT_ID('FK_User_Rol') IS NULL
   ALTER TABLE Utilizator ADD CONSTRAINT FK_User_Rol FOREIGN KEY (RolId) REFERENCES Rol(RolId)
  GO
  IF OBJECT_ID('Feedback') IS NULL 
   CREATE TABLE Feedback
	 (
	 FeedbackId int NOT NULL IDENTITY(1,1),
	 Mesaj NVARCHAR(500),
	 Recenzie NVARCHAR(100) NOT NULL,
	 DataFeedback DATETIME NOT NULL,
	 UserId int NOT NULL
	 CONSTRAINT PK_Feedback PRIMARY KEY(FeedbackId)
	 )
	 IF OBJECT_ID('FK_User_Feedback') IS NULL
	  ALTER TABLE Feedback ADD CONSTRAINT FK_User_Feedback FOREIGN KEY(UserId) REFERENCES Utilizator(UserId)
   GO
   IF OBJECT_ID('Activitate') IS NULL 
    CREATE TABLE Activitate
	 (
      ActivitateId int NOT NULL IDENTITY(1,1),
	  Denumire NVARCHAR(300) NOT NULL,
	  Descriere NVARCHAR(500) NOT NULL,
	  DataActivitate DATETIME NOT NULL,
	  Durata int NOT NULL,
	  Cod NVARCHAR(100) NOT NULL,
	  UserId int NOT NULL
	  CONSTRAINT PK_Activitate PRIMARY KEY(ActivitateId),
	  CONSTRAINT UK_Activitate UNIQUE(Cod)
      ) 
	  IF OBJECT_ID('FK_User_Activitate') IS NULL
	  ALTER TABLE Activitate ADD CONSTRAINT FK_User_Activitate FOREIGN KEY(UserId) REFERENCES Utilizator(UserId)


	
	  


	 

