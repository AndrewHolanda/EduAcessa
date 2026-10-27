-- Users: students and teachers (volunteer tutors)
CREATE TABLE IF NOT EXISTS users (
  id                SERIAL       PRIMARY KEY,
  name              VARCHAR(150) NOT NULL,
  email             VARCHAR(255) NOT NULL UNIQUE,
  password_hash     VARCHAR(255) NOT NULL,
  school            VARCHAR(150) NOT NULL,
  role              VARCHAR(10)  NOT NULL CHECK (role IN ('student', 'teacher')),
  grade_year        SMALLINT     CHECK (grade_year BETWEEN 6 AND 9),
  subject           VARCHAR(100),
  phone             VARCHAR(20),
  accepted_terms_at TIMESTAMPTZ  NOT NULL,
  created_at        TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  -- A student must have a school year and a teacher must have a subject
  CONSTRAINT student_has_grade_year CHECK (role <> 'student' OR grade_year IS NOT NULL),
  CONSTRAINT teacher_has_subject    CHECK (role <> 'teacher' OR subject IS NOT NULL)
);
