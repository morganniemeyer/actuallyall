-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS conventions;
DROP TABLE IF EXISTS games;


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