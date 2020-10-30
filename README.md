 # Movie Series Stream API #

<p align="center">


 ### Created by
 Erick Mgongo 
 Fullstack Web Developer

  ### Created with
  Node
  Nestjs
  Postgres DBMS

</p>

## API ARCHITECTURE
The achitecture is in moduler way where each entity of the database is treated as the separate module with model and services on that specific module

## DATABASE DESIGN

### MOVIE
    • Movie_id 
    • Name
    • Description
    • Country_id
    • IMDB
    • Use_id
    • Cover
    • Photo

### SEASONS
    • Season_id
    • Name
    • Number
    • Movie_id

### EPISODES
    • Episode_id
    • Name
    • Number
    • Link
    • Season_id
    

### GENRE
    • Genre_id
    • Name
    • User_id

### TYPE
    • Type_id
    • Movie_id
    • Genre_id

### ACTOR
    • Actor_id
    • Name
### CAST
    • Cast_id
    • Movie_id
    • Actor_id

### DIRECTORS
    • Director_id
    • Name

### STAFF
    • Staff_id
    • Movie_id
    • Actor_id

### COUNTRIES
    • Country_id
    • Name

### USERS
    • User_id
    • Name
    • Phone
    • Email

### ROLES
    • Role_id
    • Crud_users : bool
    • Crud_movies : bool
    • Crud_seasons : bool
    • Crud_episodes: bool
    • Crud_countries : bool
    • Crud_actors : bool
    • Crud_directors : bool

### PERMISSION
    • Permission_id
    • User_id
    • Role_id
    • Name
