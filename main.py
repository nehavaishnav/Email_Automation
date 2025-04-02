from transformers import pipeline
from flask import Flask, request, jsonify

app = Flask(__name__)
summarizer = pipeline("summarization")

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    summary = summarizer(data["text"], max_length=100, min_length=30, do_sample=False)
    return jsonify({"summary": summary[0]['summary_text']})

if __name__ == '__main__':
    app.run(port=5000)
