#!/bin/bash

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting backend...${NC}"
cd backend || { echo -e "${RED}Failed to enter backend directory!${NC}"; exit 1; }

# Activate virtual environment (assumes it's called 'venv')
source venv/bin/activate

echo -e "${GREEN}Backend virtual environment activated.${NC}"
echo -e "${CYAN}Running backend server with uvicorn...${NC}"

# Start backend server
python3 -m uvicorn main:app --reload &

# Save the PID to kill later if needed (optional)
BACKEND_PID=$!

cd ..

echo -e "${BLUE}Starting frontend...${NC}"
cd frontend || { echo -e "${RED}Failed to enter frontend directory!${NC}"; exit 1; }

echo -e "${CYAN}Running frontend with npm start...${NC}"
npm start

kill $BACKEND_PID
