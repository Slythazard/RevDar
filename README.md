# Revdar - Automated EDA and Sales Prediction Platform

**Revdar** is an all-in-one tool designed for businesses to automate **Exploratory Data Analysis (EDA)** and predict sales using machine learning. It simplifies data analysis by generating automated insights and predictions for decision-making.

## Features

- **Automated EDA**: Upload datasets to get automatically generated data insights, visualizations, and a summary report.
- **Sales Prediction**: Predict future sales using input features like store ID, CPI, week, and month.
- **User-friendly Interface**: Built using Flask, the application provides a simple interface for both technical and non-technical users.
- **CSV Upload Support**: Upload datasets in CSV format and obtain instant analysis.

## Demo
- https://revdar-762aed661061.herokuapp.com/

## Installation

### Prerequisites

- Python 3.x
- Flask
- Pandas
- Scikit-learn
- YData Profiling
- Eventlet

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/revdar.git
   cd revdar

2. Install the required dependencies:
   ```bash
   Copy code
   pip install -r requirements.txt

3. Run the Flask server:
   ```bash
   Copy code
   flask run
   Visit http://127.0.0.1:5000/ in your browser to access the app.

##How It Works
1.Data Upload: Users can upload a CSV file containing business data.
   Automated EDA: Once the data is uploaded, the system processes it, generates summary statistics, visualizations, and an EDA report using ydata_profiling.
   Sales Prediction: Input parameters such as store ID, CPI, week, and month to predict future sales using a pre-trained machine learning model.
   Key Components
   Flask: Powers the web framework and serves the frontend.
   Pandas: Handles data manipulation.
   Scikit-learn: Used for machine learning, specifically for sales prediction.
   YData Profiling: Generates the automated EDA report.
   Usage
   Upload your dataset through the Resources page.
   Review the EDA report generated.
   Use the Sales Prediction tool by selecting inputs and clicking "Predict."
   File Structure
   plaintext
   Copy code
   Revdar/
   ├── templates/
   │   ├── index.html          # Home page
   │   ├── resources.html      # Data upload and EDA page
   │   ├── products.html       # Sales prediction page
   ├── static/
   │   └── CSS/
   │       └── style.css       # Styling for the web pages
   ├── app.py                  # Main Flask app
   ├── RegModel.pkl            # Pre-trained sales prediction model
   ├── requirements.txt        # Python dependencies
   └── README.md               # This file
Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any inquiries or support, contact:

Your Name - email@example.com
GitHub: your-username

