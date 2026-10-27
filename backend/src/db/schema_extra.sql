-- Grades: score from 0 to 5 per student, subject and term (bimestre)
CREATE TABLE IF NOT EXISTS grades (
  id         SERIAL       PRIMARY KEY,
  student_id INTEGER      NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject    VARCHAR(100) NOT NULL,
  term       SMALLINT     NOT NULL CHECK (term BETWEEN 1 AND 4),
  score      NUMERIC(2,1) NOT NULL CHECK (score BETWEEN 0 AND 5),
  created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  UNIQUE (student_id, subject, term)
);

-- Teacher availability: weekly free time slots (weekday 0 = Sunday ... 6 = Saturday)
CREATE TABLE IF NOT EXISTS teacher_availability (
  id         SERIAL      PRIMARY KEY,
  teacher_id INTEGER     NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  weekday    SMALLINT    NOT NULL CHECK (weekday BETWEEN 0 AND 6),
  start_time TIME        NOT NULL,
  end_time   TIME        NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK (end_time > start_time),
  UNIQUE (teacher_id, weekday, start_time)
);

-- Appointments: a tutoring session between a student and a teacher
CREATE TABLE IF NOT EXISTS appointments (
  id           SERIAL      PRIMARY KEY,
  student_id   INTEGER     NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  teacher_id   INTEGER     NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  scheduled_at TIMESTAMPTZ NOT NULL,
  mode         VARCHAR(10) NOT NULL CHECK (mode IN ('chat', 'video')),
  status       VARCHAR(12) NOT NULL DEFAULT 'scheduled'
               CHECK (status IN ('scheduled', 'done', 'cancelled')),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK (student_id <> teacher_id)
);

-- A teacher cannot have two active appointments at the same time
CREATE UNIQUE INDEX IF NOT EXISTS one_active_appointment_per_slot
  ON appointments (teacher_id, scheduled_at)
  WHERE status <> 'cancelled';