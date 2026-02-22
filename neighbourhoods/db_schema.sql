-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. EMAILS TABLE (for Landing Page & Newsletter)
create table emails (
  id uuid default uuid_generate_v4() primary key,
  email text not null unique,
  source text default 'landing_page',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. NEIGHBOURHOODS TABLE (Dynamic Data)
create table neighbourhoods (
  id uuid default uuid_generate_v4() primary key,
  slug text not null unique,              -- e.g., 'kensington'
  name text not null,                     -- e.g., 'Kensington'
  quadrant text not null,                 -- e.g., 'NW'
  tagline text not null,
  description text not null,
  address text not null,
  
  -- Location Data
  coordinates point,                      -- Stored as (x,y) -> (lat,lng)
  
  -- JSONB columns for flexible data structures
  stats jsonb not null default '{}'::jsonb,        -- { population: 4200, walkScore: 92 }
  highlights jsonb not null default '[]'::jsonb,   -- Array of highlight objects
  vibe jsonb not null default '[]'::jsonb,         -- Array of strings ["Walkable", "Eclectic"]
  real_data jsonb not null default '{}'::jsonb,    -- { fact1: "...", fact2: "..." }
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
-- 1. Emails: Public can INSERT (sign up), but only Admins can SELECT (view list)
alter table emails enable row level security;

create policy "Enable insert for public" on emails
  for insert with check (true);

create policy "Enable read access for authenticated users only" on emails
  for select using (auth.role() = 'authenticated');

-- 2. Neighbourhoods: Public can SELECT (view), only Admins can INSERT/UPDATE
alter table neighbourhoods enable row level security;

create policy "Enable read access for public" on neighbourhoods
  for select using (true);

create policy "Enable write access for authenticated users only" on neighbourhoods
  for all using (auth.role() = 'authenticated');
