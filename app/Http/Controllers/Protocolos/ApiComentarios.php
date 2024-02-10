<?php

namespace App\Http\Controllers\Protocolos;

use App\Http\Controllers\Controller;
use App\Models\Protocolos\Comentarios;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ApiComentarios extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'comentario' => ['required', 'string', 'max:599'],
            'protocolo_id' => ['required', 'numeric']
        ]);

        Comentarios::create([
            'comentario' => $request->comentario,
            'protocolo_id' => $request->protocolo_id
        ]);

        return response()->json(['message' => 'Se agrego correctamente el comentario']);
    }

    public function getComentario(Request $request)
    {
        $request->validate(['protocolo_id' => ['required', 'numeric']]);

        $comentarios = Comentarios::where('protocolo_id', $request->protocolo_id)->get();
        foreach ($comentarios as $comentario) {
            $comentario->formatted_date = Carbon::parse($comentario->created_at)->format('F d Y, g:i a');
        }

        return response()->json(['comentarios' => $comentarios]);
    }
}
