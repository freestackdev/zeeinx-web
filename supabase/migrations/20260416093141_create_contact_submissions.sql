/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, required) - Submitter's full name
      - `email` (text, required) - Submitter's email address
      - `message` (text, required) - The message body
      - `created_at` (timestamptz, auto-set) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add INSERT policy for anonymous users (public form submissions allowed)
    - No SELECT/UPDATE/DELETE policy for public users (admin-only read access)

  3. Notes
    - The form is publicly accessible so anonymous inserts are permitted
    - Reading submissions is restricted to service role only (no public read policy)
    - All fields are required (NOT NULL)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name <> '' AND
    email <> '' AND
    message <> ''
  );
