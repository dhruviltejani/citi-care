from routes.dashboard import dashboard_bp
app.register_blueprint(dashboard_bp, url_prefix='/api')