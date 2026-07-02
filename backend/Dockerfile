# Use Python 3.11 as the base image
FROM python:3.11-slim
# Set the working directory inside the container
WORKDIR /app
# Copy requirements first (better build caching)
COPY requirements-prod.txt .
RUN pip install --default-timeout=1000 --no-cache-dir -r requirements-prod.txt
# Copy the rest of the backend project
COPY . .
# Expose the FastAPI port
EXPOSE 8000
# Start the FastAPI application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]