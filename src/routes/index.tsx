import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth";
import { Home, AddColaborator, AddMerchant } from "../pages/core";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/colaboradores/adicionar"
          element={
            <ProtectedRoute>
              <AddColaborator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/empresas/adicionar"
          element={
            <ProtectedRoute>
              <AddMerchant />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export { AppRoutes };
