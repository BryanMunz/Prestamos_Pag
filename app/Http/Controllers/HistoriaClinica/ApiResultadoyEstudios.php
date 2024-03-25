<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\HistoriaClinica\ResultadosyEstudios;
use Illuminate\Http\Request;

class ApiResultadoyEstudios extends Controller
{
    /**
     * Handle an incoming file upload request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $messages = [
            'required' => 'Please select file to upload',
        ];

        $this->validate($request, [
            'file.*' => 'required',
            'id_historia_clinica' => 'required', // Validar la presencia de la ID de historia clínica
        ], $messages);

        foreach ($request->file as $file) {
            $filename = $file->getClientOriginalName();
            $filesize = $file->getSize();
            $file->storeAs('public/', $filename);
            $fileModel = new ResultadosyEstudios;
            $fileModel->name = $filename;
            $fileModel->size = $filesize;
            $fileModel->location = 'storage/' . $filename;
            $fileModel->historia_clinica_id = $request->id_historia_clinica; // Asignar ID de historia clínica
            $fileModel->save();
        }

        return response()->json(['message' => 'File/s guardada exitosamente'], 201);
    }

    public function getByHistoriaClinica($id)
    {
        return ResultadosyEstudios::where('historia_clinica_id', $id)->get();
    }

    public function get($id)
    {
        return ResultadosyEstudios::where('historia_clinica_id', $id)->get();
    }
}
