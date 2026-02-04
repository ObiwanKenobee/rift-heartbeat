-- Create partnership inquiries table
CREATE TABLE public.partnership_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  inquiry_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.partnership_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert inquiries (public contact form)
CREATE POLICY "Anyone can submit partnership inquiries"
ON public.partnership_inquiries
FOR INSERT
WITH CHECK (true);

-- Only allow reading for authenticated admin users (future admin feature)
CREATE POLICY "Authenticated users can view inquiries"
ON public.partnership_inquiries
FOR SELECT
TO authenticated
USING (true);