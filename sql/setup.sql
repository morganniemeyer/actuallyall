-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS conventions;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS ducks;
DROP TABLE IF EXISTS vgames;



CREATE TABLE conventions (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    genre  VARCHAR,
    season VARCHAR,
    structure VARCHAR
);

CREATE TABLE games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    type VARCHAR,
    played BOOLEAN
);

CREATE TABLE ducks (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    type VARCHAR,
    relation VARCHAR
);

CREATE TABLE vgames (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    type VARCHAR,
    played BOOLEAN
);

INSERT INTO conventions (
    name, genre, season, structure
)
VALUES
('Twin Cities Con', 'multi', 'fall/winter', 'corporation'),
('Anime Detour', 'anime', 'spring', 'non-profit'),
('Anime Nebraskon', 'anime', 'fall', 'non-profit'),
('C2E2', 'multi', 'multi', 'unknown'),
('Ai-Kon', 'anime', 'summer', 'unknown');

INSERT INTO games (
    name, type, played
)
VALUES
('Azul', 'tile-placement', TRUE),
('Corinth', 'roll-and-write', TRUE),
('Flamecraft', 'worker placement', FALSE),
('Ticket To Ride', 'route completion', TRUE),
('Sagrada', 'dice-placement', TRUE);

INSERT INTO ducks (
    name, type, relation
)
VALUES
('Donald', 'Duck', 'primary'),
('Scrooge', 'McDuck', 'Uncle'),
('Huey', 'Duck', 'nephew'),
('Louie', 'Duck', 'nephew'),
('Flintheart', 'Glomgold', 'unrelated');

INSERT INTO vgames (
    name, type, played
)
VALUES
('Harvest Moon', 'farming', TRUE),
('Animal Crossing', 'real time sim', TRUE),
('Katamari Damacy', 'rolling', TRUE),
('Sims', 'life sim', TRUE),
('Civilization 6', 'strategy', TRUE);